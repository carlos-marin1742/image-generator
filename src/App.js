import React, { useState, useEffect, use } from 'react';
import './App.css';



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

  // setting up form data for all form fields
  const [formData, setFormData] = useState({
    model: '',
    count: '',
    ratio: '',
    prompt: ''
  });

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  
const handleformSubmit = (e) => {
  e.preventDefault();
  const { model, count, ratio, prompt } = formData;

  if (!model || !count || !ratio || !prompt) {
    alert('Please fill in all fields before submitting.');
    return;
  }
  console.log('Form submitted with data:', formData);

  // NEED TO ADD API CALL LOGIC HERE
};

// Handle random Prompt Button Click
const handleRandomPrompt = () => {
  const randomPrompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
  setFormData((prevData) => ({
    ...prevData,
    prompt: randomPrompt
  }));
};


// JS code needs to be rewritten as REACT JSX CODE
// JS code needs to be rewritten as REACT JSX CODE
// JS code needs to be rewritten as REACT JSX CODE
// JS code needs to be rewritten as REACT JSX CODE
// JS code needs to be rewritten as REACT JSX CODE
// JS code needs to be rewritten as REACT JSX CODE
// JS code needs to be rewritten as REACT JSX CODE
// JS code needs to be rewritten as REACT JSX CODE

//createImageCards(model, count, ratio, prompt) {}




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
          <form action="#" className="prompt-form" onSubmit={handleformSubmit}>
            {/* Prompt Container */}
            <div className="prompt-container">
          <textarea
            className="prompt-input"
            placeholder="Describe your imagination in detail..."
            required
            autoFocus
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          ></textarea>
          <button type="button" className="prompt-btn" onClick={handleRandomPrompt}>
            <i className="fa-solid fa-dice"></i>
          </button>
            </div>

            {/* Prompt Actions Button */}
            <div className = "prompt-actions">
              <div className = "select-wrapper">
                <select className = "custom-select" id = "model-select" name="model" 
                value = {formData.model} onChange={handleChange} required>
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
                <select className = "custom-select" 
                id = "count-select" 
                name="count" 
                onChange={handleChange}
                value = {formData.count}
                required>
                  <option value = "" selected  disabled>Image Count</option>
                  <option value = "1">1 Image</option>
                  <option value = "2">2 Images</option>
                  <option value = "3">3 Images</option>
                  <option value = "4">4 Images</option>
                </select>
              </div>
              {/* Ratio  select */}
                <div className = "select-wrapper">
                <select className = "custom-select" id = "ratio-select" name = "ratio" 
                value = {formData.ratio}
                onChange={handleChange} required>
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
              {/* Result Gallery Grid */}
              <div className="gallery-grid">
                <div className="img-card">
                  <img src="test.png" alt ="test" className="result-img" />
                </div>
                </div>



            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default App;