# 🚀 Insforge + Trigger.dev AI Media Pipeline

An end-to-end **AI-powered media processing pipeline** built using **Insforge** and **Trigger.dev**.

This project demonstrates how to:

* Analyze media using AI
* Store results in a database
* Trigger follow-up workflows (notifications)
* Orchestrate everything using background jobs

---

## 🧠 Architecture Overview

```
Trigger.dev Task
      ↓
Insforge Edge Function (AI Analysis)
      ↓
Database (store results)
      ↓
Insforge Edge Function (Notification)
```

---

## ⚙️ Tech Stack

* **Trigger.dev v3** → Background job orchestration
* **Insforge SDK** → Backend (DB, AI, Functions)
* **TypeScript** → Type-safe development
* **Node.js** → Runtime

---

## 📁 Project Structure

```
insforge-triggerdev/
│
├── insforge/
│   └── functions/
│       ├── analyze-media/
│       │   └── index.ts
│       └── notify-media-upload/
│           └── index.ts
│
├── src/
│   ├── lib/
│   │   └── insforge.ts
│   └── trigger/
│       └── mediaPipeline.ts
│
├── .env.example
├── trigger.config.ts
├── package.json
└── README.md
```

---

## 🔑 Environment Variables

Create a `.env` file in the root:

```
INSFORGE_URL=https://your-project.insforge.app
INSFORGE_ANON_KEY=your_anon_key
```

⚠️ Never commit `.env` to GitHub.

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```
npm install
```

---

### 2️⃣ Setup Insforge Project

Link your project:

```
npx @insforge/cli link --project-id <your_project_id>
```

---

### 3️⃣ Deploy Functions

```
npx @insforge/cli functions deploy analyze-media
npx @insforge/cli functions deploy notify-media-upload
```

---

### 4️⃣ Run Trigger.dev locally

```
npx trigger.dev dev
```

---

## 🧩 How It Works

### 🔹 Step 1: Trigger.dev Task

File: `mediaPipeline.ts`

* Receives media URL
* Calls Insforge AI function
* Stores result in DB
* Triggers notification function

---

### 🔹 Step 2: AI Processing

Function: `analyze-media`

* Takes `fileUrl`
* Uses AI to generate description
* Returns structured response

---

### 🔹 Step 3: Database Storage

```
media_assets table:
- id
- file_url
- description
```

---

### 🔹 Step 4: Notification

Function: `notify-media-upload`

* Receives assetId + description
* Can be extended to:

  * Send email
  * Push notifications
  * Webhooks

---

## 🧪 Example Payload

```json
{
  "fileUrl": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
}
```

---

## 📸 Sample Flow

1. Trigger task manually / via API
2. AI analyzes media
3. Result stored in DB
4. Notification triggered

---

