import React, { useState, useEffect, use } from 'react';
import './App.css';
import is from 'oauth2-server/lib/validator/is';
import { set } from 'mongoose';

function App() {
  // Initializing the state by checking localStorage and System preferences
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? savedTheme === 'dark' : systemPrefersDark;
  });

  // Updating the DOM and LocalStorage whenever isDark changes
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // TOGGLE FUNCTION
  const toggleTheme = () => setIsDark((prev) => !prev);

  const examplePrompts = [
  "A magic forest with glowing plants and fairy homes among giant mushrooms",
  "An old steampunk airship floating through golden clouds at sunset",
  "A future Mars colony with glass domes and gardens against red mountains",
  "A dragon sleeping on gold coins in a crystal cave",
  "An underwater kingdom with merpeople and glowing coral buildings",
  "A floating island with waterfalls pouring into clouds below",
  "A witch's cottage in fall with magic herbs in the garden",
  "A robot painting in a sunny studio with art supplies around it",
  "A magical library with floating glowing books and spiral staircases",
  "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
  "A cosmic beach with glowing sand and an aurora in the night sky",
  "A medieval marketplace with colorful tents and street performers",
  "A cyberpunk city with neon signs and flying cars at night",
  "A peaceful bamboo forest with a hidden ancient temple",
  "A giant turtle carrying a village on its back in the ocean",
];

  
  // JS CODE(NEEDS TO BE CONVERTED TO REACT CODE )
  const promptBtn = document.querySelector('.prompt-btn');
  const promptInput = document.querySelector('.prompt-input');
  const promptForm = document.querySelector('.prompt-form');
  const modelSelect = document.getElementById('model-select');
  const countSelect = document.getElementById('count-select');
  const ratioSelect = document.getElementById('ratio-select');

  const handleformSubmit = (e) => {
    e.preventDefault();
    const selectedModel = modelSelect.value;
    const imageCount = parseInt(countSelect.value) || 1;
    const aspectRatio = ratioSelect.value || '1/1';
    const promptText = promptInput.value.trim();

    if (!selectedModel || !imageCount || !aspectRatio || !promptText) {
      alert('Please fill in all fields before submitting.');
      return;
    }

  }

  promptBtn.addEventListener('click', () => {
    const randomPrompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    randomPrompt.value = randomPrompt;
    randomPrompt.focus();

  })
promptForm.addEventListener("submit", handleformSubmit);





  // JSX CODE 
  // JSX CODE 
  return (
    <div className="App">
      {/* Load Font Awesome globally */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
      />

      <div className="container">
        {/* Header Section */}
        <header className="header">
          <div className="logo-wrapper">
            <div className="logo">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h1>AI Image Generator | By Carlos Marin</h1>
          </div>

          <button className="theme-toggle" onClick = {toggleTheme}>
            <i className={isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
          </button>
        </header>

        {/* Main Content Section */}
        <div className="main-content">
          <form action="#" className="prompt-form">
            {/* Prompt Container */}
            <div className="prompt-container">
              <textarea
                className="prompt-input"
                placeholder="Describe your imagination in detail..."
                required
                autoFocus
              ></textarea>
              <button type = "button"className="prompt-btn">
            <i className="fa-solid fa-dice"></i>
          </button>
            </div>

            {/* Prompt Actions Button */}
            <div className = "prompt-actions">
              <div className = "select-wrapper">
                <select className = "custom-select" id = "model-select" required>
                  <option value = "" selected  disabled>Select Model</option>
                  <option value = "black-forest-labs/FLUX.1-dev">FLUX.1-dev</option>
                  <option value = "black-forest-labs/FLUX.1-schnell">FLUX.1-schnell</option>
                  <option value = "stabilityai/stable-diffusion-xl-base-1.0">Stable Diffusion XL</option>
                  <option value = 'runwayml/stable-diffusion-v1-5'>Stable Diffusion v1.5</option>
                  <option value ="prompthero/openjourney">OpenJourney</option>
                </select>
              </div>
              {/* Images #  select */}
                <div className = "select-wrapper">
                <select className = "custom-select"id = "count-select" required>
                  <option value = "" selected  disabled>Image Count</option>
                  <option value = "1">1 Image</option>
                  <option value = "2">2 Images</option>
                  <option value = "3">3 Images</option>
                  <option value = "4">4 Images</option>
                </select>
              </div>
              {/* Ratio  select */}
                <div className = "select-wrapper">
                <select className = "custom-select" id = "ratio-select" required>
                  <option value = "" selected  disabled>Aspect Ratio</option>
                  <option value = "1/1">Square (1:1)</option>
                  <option value = "16/9">Landscape (16:9)</option>
                  <option value = "9/16">Portrait (9:16)</option>
                </select>
              </div>
              {/* Submit Button */}
              <button type="submit" className="generate-btn">
                <i className="fa-solid fa-wand-sparkles"></i> Generate Images
              </button>


            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default App;