#!/usr/bin/env node
// Minimal LangGraph workflow with typed state and streaming
import { StateGraph, START, END } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

async function main() {
  const llm = new ChatOpenAI({ modelName: "gpt-3.5-turbo", streaming: true });

  // Define a typed state shape for clarity
  const StateAnnotation = {
    prompt: "",
    answer: "",
  };

  const askNode = async (state) => {
    const res = await llm.invoke([new HumanMessage(state.prompt)]);
    return { ...state, answer: res.content };
  };

  const showNode = async (state) => {
    console.log("Model reply:", state.answer);
    return state;
  };

  const graph = new StateGraph(StateAnnotation)
    .addNode("ask", askNode)
    .addNode("show", showNode)
    .addEdge(START, "ask")
    .addEdge("ask", "show")
    .addEdge("show", END)
    .compile();

  const stream = await graph.streamEvents({ prompt: "Hello" });
  for await (const event of stream) {
    if (event.event === "on_chat_model_stream") {
      process.stdout.write(event.data.token);
    }
  }
  console.log("\nGraph finished.");
}

main().catch((err) => {
  console.error("Error running example graph:", err);
});
