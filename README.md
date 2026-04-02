# Insforge + Trigger.dev Integration Examples

This repository demonstrates how to use **Insforge** with **Trigger.dev** to build AI-powered workflows. 

## Why this example?

This repository demonstrates how **Trigger.dev** can orchestrate AI-powered workflows using **Insforge** as a backend, combining AI, database operations, and serverless functions in a single pipeline. This approach allows for a clean separation of concerns: Trigger.dev handles the workflow logic and reliability (retries, observability), while Insforge handles the AI analysis and data storage.

## Example: AI Media Pipeline

The primary example is a media processing pipeline that:
1. **Analyze media**: Uses Insforge AI to generate a description for a media file URL.
2. **Store in database**: Persists the AI analysis in the `media_assets` table.
3. **Trigger notification**: Invokes a serverless function to alert other systems of the new upload.

📁 **See**: `examples/insforge-ai-media-pipeline`

## Database Setup

To run this example, create a table named `media_assets` in your Insforge project with the following fields:

- `file_url` (text)
- `description` (text)

## Setup

1. Clone this repository.
2. Navigate to the example directory:
   ```bash
   cd examples/insforge-ai-media-pipeline
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy `.env.example` to `.env` and fill in your Insforge credentials:
   ```bash
   cp .env.example .env
   ```

## Run the project

To run the Trigger.dev development environment:

```bash
npx trigger.dev dev
```

## Example Payload

You can trigger the task with the following JSON payload:

```json
{
  "fileUrl": "https://example.com/image.png"
}
```

## Use cases
- **AI media analysis**: Automated captioning or tagging of uploaded images/videos.
- **Automated tagging**: Categorizing content for searchability.
- **Content pipelines**: Building complex multi-step content moderation workflows.
