# ✨ AI Image Generator

## Overview

AI Image Generator is a React-based web application that lets users generate stunning AI-powered images directly in the browser using natural language prompts. Simply describe what you want to see, choose a model, and the app handles the rest — calling the Hugging Face Inference API to produce up to four unique images in seconds.

The app supports multiple state-of-the-art image generation models, including FLUX.1-dev, FLUX.1-schnell, Stable Diffusion XL, Stable Diffusion v1.5, and OpenJourney. It also features a random prompt generator to spark creativity, a light/dark theme toggle with system preference detection, and a one-click image download button — making it a polished, full-featured tool for anyone who wants to explore AI image generation without any backend setup.

---

## Installation & Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- A [Hugging Face](https://huggingface.co/) account and API token

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-image-generator.git
   cd ai-image-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your environment variables**

   Create a `.env` file in the root of the project (see [Configuration](#configurationenvironment-variables) below):
   ```bash
   touch .env
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`.

---

## Usage Examples

> 📹 *Video walkthrough coming soon!*

Here are a few example prompts to get you started:

- `"A magic forest with glowing plants and fairy homes among giant mushrooms"`
- `"A cyberpunk city with neon signs and flying cars at night"`
- `"A dragon sleeping on gold coins in a crystal cave"`

You can also click the 🎲 **dice button** next to the prompt field to auto-fill a random example prompt.

**Basic workflow:**
1. Type (or randomize) a prompt describing your desired image
2. Select an AI model from the dropdown
3. Choose how many images to generate (1–4)
4. Click **Generate Images** and wait for results
5. Hover over any image and click the download button to save it

---

## Technologies Used

- **React** — Frontend UI framework
- **Hugging Face Inference API** — AI image generation backend (`@huggingface/inference`)
- **CSS (custom)** — Styling with dark/light theme support
- **Font Awesome** — Icons
- **JavaScript (ES2020+)** — Async/await, blob handling, localStorage

### AI Models Supported

| Display Name | Model ID |
|---|---|
| FLUX.1-dev | `black-forest-labs/FLUX.1-dev` |
| FLUX.1-schnell | `black-forest-labs/FLUX.1-schnell` |
| Stable Diffusion XL | `stabilityai/stable-diffusion-xl-base-1.0` |
| Stable Diffusion v1.5 | `runwayml/stable-diffusion-v1-5` |
| OpenJourney | `prompthero/openjourney` |

---

## Configuration / Environment Variables

Create a `.env` file in the root directory with the following variable:

```env
REACT_APP_HF_TOKEN=your_hugging_face_api_token_here
```

| Variable | Required | Description |
|---|---|---|
| `REACT_APP_HF_TOKEN` | ✅ Yes | Your Hugging Face API token. Get one at [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) |

> ⚠️ **Important:** Never commit your `.env` file to version control. Make sure `.env` is listed in your `.gitignore`.

The app will log `"Token Loaded: Yes"` to the console on startup if the token is detected correctly.
