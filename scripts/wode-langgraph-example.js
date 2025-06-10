#!/usr/bin/env node
import { StateGraph, START, END } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

async function main() {
  const llm = new ChatOpenAI({ modelName: "gpt-3.5-turbo" });

  const askNode = async (state) => {
    const res = await llm.invoke([new HumanMessage(state.prompt)]);
    return { ...state, answer: res.content };
  };

  const showNode = async (state) => {
    console.log("Model reply:", state.answer);
    return state;
  };

  const graph = new StateGraph()
    .addNode("ask", askNode)
    .addNode("show", showNode)
    .addEdge(START, "ask")
    .addEdge("ask", "show")
    .addEdge("show", END)
    .compile();

  await graph.invoke({ prompt: "Hello" });
}

main().catch((err) => {
  console.error("Error running example graph:", err);
});
