import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle the class on the body element whenever isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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

          <button className="theme-toggle">
            <i className="fa-solid fa-moon"></i>
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
                <select className = "custom-select"required>
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
                <select className = "custom-select"required>
                  <option value = "" selected  disabled>Image Count</option>
                  <option value = "1">1 Image</option>
                  <option value = "2">2 Images</option>
                  <option value = "3">3 Images</option>
                  <option value = "4">4 Images</option>
                </select>
              </div>
              {/* Ratio  select */}
                <div className = "select-wrapper">
                <select className = "custom-select" required>
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