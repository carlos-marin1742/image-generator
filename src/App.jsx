import React, { useState, useEffect } from 'react';
import './App.css';
import { InferenceClient } from "@huggingface/inference";

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

  // State for generated images and loading status
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);

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

  // Generic handler to update state based on the 'name' attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle random Prompt Button Click
  const handleRandomPrompt = () => {
    const randomPrompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    setFormData((prevData) => ({
      ...prevData,
      prompt: randomPrompt
    }));
  };

  // Defining the models as simple key-value pairs for easy access and scalability
  const models = {
    "flux-dev": "black-forest-labs/FLUX.1-dev",
    "flux-schnell": "black-forest-labs/FLUX.1-schnell",
    "sdxl": "stabilityai/stable-diffusion-xl-base-1.0",
    "sd15": "runwayml/stable-diffusion-v1-5",
    "openjourney": "prompthero/openjourney"
  };

  // Initialize Hugging Face client
  const HF_TOKEN = process.env.REACT_APP_HF_TOKEN; // Note: Use REACT_APP_ prefix for Create React App
  const client = new InferenceClient(HF_TOKEN);

  // Form submit handler with image generation
  const handleformSubmit = async (e) => {
    e.preventDefault();
    const { model, count, prompt } = formData;

    // Basic validation to ensure all fields are filled
    if (!model || !count || !prompt) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    setLoading(true);
    setGeneratedImages([]); // Clear previous images

    try {
      const imageCount = parseInt(count);
      const imagePromises = [];

      // Generate multiple images based on count
      for (let i = 0; i < imageCount; i++) {
        imagePromises.push(
          client.textToImage({
            model: model,
            inputs: prompt,
          })
        );
      }

      // Wait for all images to be generated
      const blobs = await Promise.all(imagePromises);
      
      // Convert blobs to URLs
      const imageUrls = blobs.map(blob => URL.createObjectURL(blob));
      setGeneratedImages(imageUrls);

    } catch (error) {
      console.error('Error generating images:', error);
      alert('Failed to generate images. Please check your API token and try again.');
    } finally {
      setLoading(false);
    }
  };

  // Download image handler
  const handleDownload = (imageUrl, index) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `generated-image-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // JSX CODE 
  return (
    <div className={`App ${!isDark ? 'light-theme' : ''}`}>
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

          <button className="theme-toggle" onClick={toggleTheme}>
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
            <div className="prompt-actions">
              <div className="select-wrapper">
                <select 
                  className="custom-select" 
                  id="model-select" 
                  name="model" 
                  value={formData.model} 
                  onChange={handleChange} 
                  required
                >
                  <option value="" disabled>Select Model</option>
                  <option value={models["flux-dev"]}>FLUX.1-dev</option>
                  <option value={models["flux-schnell"]}>FLUX.1-schnell</option>
                  <option value={models["sdxl"]}>Stable Diffusion XL</option>
                  <option value={models["sd15"]}>Stable Diffusion v1.5</option>
                  <option value={models["openjourney"]}>OpenJourney</option>
                </select>
              </div>

              {/* Images # select */}
              <div className="select-wrapper">
                <select 
                  className="custom-select" 
                  id="count-select" 
                  name="count" 
                  onChange={handleChange}
                  value={formData.count}
                  required
                >
                  <option value="" disabled>Image Count</option>
                  <option value="1">1 Image</option>
                  <option value="2">2 Images</option>
                  <option value="3">3 Images</option>
                  <option value="4">4 Images</option>
                </select>
              </div>
              
              {/* Submit Button */}
              <button type="submit" className="generate-btn" disabled={loading}>
                <i className="fa-solid fa-wand-sparkles"></i> 
                {loading ? 'Generating...' : 'Generate Images'}
              </button>
            </div>
          </form>

          {/* Loading Indicator */}
          {loading && (
            <div className="loading-container">
              <p>Generating your images...</p>
            </div>
          )}

          {/* Result Gallery Grid - Dynamic */}
          {generatedImages.length > 0 && (
            <div className="gallery-container">
              {generatedImages.map((imageUrl, index) => (
                <div className="gallery-grid" key={index}>
                  <div className="img-card">
                    <img src={imageUrl} alt={`Generated ${index + 1}`} className="result-img" />
                    <div className="img-overlay">
                      <button 
                        className="img-download-btn" 
                        onClick={() => handleDownload(imageUrl, index)}
                      >
                        <i className="fa-solid fa-download"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
