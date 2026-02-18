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

[![Demo of the ai image generator](https://img.youtube.com/vi/Vekcy8hwHZ4/maxresdefault.jpg)](https://www.youtube.com/watch?v=Vekcy8hwHZ4)



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

---

## Contributing

Contributions are welcome and appreciated! To keep things organized, please follow these steps:

1. **Fork** the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and ensure the app runs without errors:
   ```bash
   npm start
   ```

3. **Commit** your changes with a clear, descriptive message:
   ```bash
   git commit -m "feat: add support for custom image dimensions"
   ```

4. **Push** to your fork and open a **Pull Request** against the `main` branch.

### Guidelines

- Keep pull requests focused — one feature or fix per PR
- Follow the existing code style and component structure
- Test your changes across both light and dark themes
- Do not commit `.env` files or expose API keys

For major changes or new feature ideas, please open an issue first to discuss what you'd like to change.

---

## Roadmap

Planned features and improvements for future versions:

- [ ] Aspect ratio selector (portrait, landscape, square)
- [ ] Image history with local storage persistence
- [ ] Side-by-side model comparison view
- [ ] Copy prompt to clipboard button
- [ ] Negative prompt support
- [ ] Progress bar for multi-image generation

---

## FAQs

**Q: Why am I getting a "Failed to generate images" error?**  
A: Double-check that your `REACT_APP_HF_TOKEN` is set correctly in the `.env` file and that the token has inference permissions on Hugging Face.

**Q: Some models are slower than others — is that normal?**  
A: Yes. FLUX.1-dev and SDXL are larger models and take longer to generate. FLUX.1-schnell is optimized for speed.

**Q: Can I add more models?**  
A: Absolutely. Add a new entry to the `models` object in `App.jsx` and a corresponding `<option>` in the model select dropdown.

**Q: Are generated images saved anywhere?**  
A: Images are held in memory during your session. Use the download button to save any image you want to keep.

---


## Author & Credits

**Carlos Marin**  
Creator and sole developer of AI Image Generator.

- 🐙 GitHub: [@carlos-marin1742](https://github.com/carlos-marin1742)
- 💼 LinkedIn: [https://www.linkedin.com/in/carlos-marin-90482b13b/](https://www.linkedin.com/in/carlos-marin-90482b13b/)
- 📧 Email: carlosmarinjr1@gmail.com

> Feel free to reach out if you have questions, ideas, or just want to connect!

---

*Built with ❤️ using React and the Hugging Face Inference API.*
