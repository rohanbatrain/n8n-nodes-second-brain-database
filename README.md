# n8n-nodes-second-brain-database

This is an n8n community node for accessing and managing a **Second Brain Database**. It allows you to integrate your Second Brain Database API directly into your n8n workflows, enabling powerful automation and data management.

## Features

-   **Seamless Integration**: Connects directly to your Second Brain Database API.
-   **Automated Workflows**: Trigger actions or fetch data as part of complex n8n workflows.
-   **Secure Authentication**: Uses API Key authentication for secure access.

## Prerequisites

-   [n8n](https://n8n.io/) installed and running.
-   A running instance of the **Second Brain Database**.
-   An API Key for your Second Brain Database.

## Installation

### Community Node Installation

1.  Open your n8n instance.
2.  Go to **Settings** > **Community Nodes**.
3.  Select **Install**.
4.  Enter `n8n-nodes-second-brain-database` (once published to npm) or install from the local path if developing.

### Manual Installation (Development)

1.  Clone this repository into your n8n `custom` nodes directory (usually `~/.n8n/custom`).
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Build the code:
    ```bash
    npm run build
    ```
4.  Restart n8n.

## Usage

1.  In the n8n editor, search for **Second Brain Database**.
2.  Add the node to your workflow.
3.  Configure the credentials:
    -   **API Key**: Your Second Brain Database API Token.
    -   **Base URL**: The URL of your Second Brain Database instance (e.g., `http://localhost:8000`).
4.  Select the operation you want to perform (e.g., `Get Item`, `Create Item`, etc.).

## Development

### Install Dependencies

```bash
npm install
```

### Build

```bash
npm run build
```

### Watch for Changes

```bash
npm run build:watch
```

### Lint

```bash
npm run lint
```

## License

MIT
