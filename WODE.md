# WODE

This repository is a personal fork of **Claude Code**, Anthropic's agentic coding tool. `claude` lives in your terminal and helps automate routine development tasks through natural language commands.

## Key Features

- Understands your codebase and can execute commands on your behalf.
- Offers explanations for complex code and streamlines git workflows.
- Integrates with IDEs or can be called directly in a terminal.

## Getting Started

1. Install Node.js 18 or later.
2. Install the CLI:
   ```sh
   npm install -g @anthropic-ai/claude-code
   ```
3. From your project directory, run `claude` to interact with the agent.

## Data Practices

Running `claude` collects limited usage data and feedback to improve the tool. Anthropic stores session feedback transcripts for 30 days and does not use them to train generative models. See `README.md` for more information.

## Goals for this Fork

This fork explores how Claude Code can be customized for personal workflows. Experiment with scripts, add-on commands, or integration hooks to tailor the tool for your projects.


## Local Scripts

To experiment with custom workflows, this fork includes a small Node.js scaffold:

```sh
npm run wode
```

This runs `scripts/wode-scaffold.js`, which you can modify to add new commands or automate tasks.

You can also explore integration with the experimental **olca** Python package. After installing it via `pip install olca`, run:

```sh
npm run olca
```

This executes `scripts/wode-olca.js`, which simply invokes `olca --help` so you can see the available options and start experimenting.

For a quick Python-side check of your installation, you can run:

```sh
npm run olca-info
```

This command calls a small Python helper that prints the `olca` package version and module path.

Once you've installed the `coaiapy` package, you can forward Langfuse commands through this fork using:

```sh
npm run olca-fuse -- --help
```

This simply invokes `coaia fuse` under the hood, keeping the familiar `olca` workflow while tapping into the newer CLI features.

## LangGraph Example

To explore LangGraph 0.4 features, install the necessary packages and run the bundled example:

```sh
npm install @langchain/langgraph @langchain/openai @langchain/core
npm run example-graph
```

The script `scripts/wode-langgraph-example.js` now streams tokens as the model replies, demonstrating how LangGraph can emit live events. Use this as a starting point for designing more complex graphs or custom streaming workflows.

### Typed state

The example initializes `StateGraph` with a simple state annotation so you can experiment with typed transitions. Edit the script to evolve this state for more advanced graphs.

### Running tests

This fork now includes a small test to verify the scaffold script. Run all tests with:

```sh
npm test
```

