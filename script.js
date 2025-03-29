// Document ready function
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the application
  initApp();
  
  // Load weather data
  loadWeatherData();
  
  // Set up event listeners
  document.getElementById('analyzeBtn').addEventListener('click', handleImageAnalysis);
  document.getElementById('cropSelector').addEventListener('change', handleCropSelection);
});

// Initialize the application
function initApp() {
  console.log("Initializing AI AgriTech Assistant...");
}

// Load weather data
function loadWeatherData() {
  const weatherData = {
    forecast: [
      { date: "Today", temp: "37°C", condition: "Sunny", icon: "☀️" },
      { date: "Tomorrow", temp: "33°C", condition: "Partly Cloudy", icon: "⛅" },
      { date: "Day After", temp: "32°C", condition: "Rain", icon: "🌧️" }
    ],
    lastUpdated: "March 29, 2025 (7:00 AM)"
  };
  displayWeatherData(weatherData);
}

// Display weather data
function displayWeatherData(data) {
  const weatherContainer = document.getElementById('weatherData');
  
  let html = `<p class="last-updated">Last updated: ${data.lastUpdated}</p>`;
  html += '<div class="forecast-container">';
  
  data.forecast.forEach(day => {
    html += `
      <div class="forecast-day">
        <h3>${day.date}</h3>
        <div class="weather-icon">${day.icon}</div>
        <p class="temp">${day.temp}</p>
        <p class="condition">${day.condition}</p>
      </div>
    `;
  });
  
  html += '</div>';
  weatherContainer.innerHTML = html;
}

// Handle image analysis
function handleImageAnalysis() {
  const fileInput = document.getElementById('cropImage');
  const resultContainer = document.getElementById('analysisResult');
  
  if (!fileInput.files || fileInput.files.length === 0) {
    resultContainer.innerHTML = '<p class="error">Please select an image first</p>';
    return;
  }
  
  resultContainer.innerHTML = '<p>Analyzing image...</p>';
  
  // Simulate AI analysis with a timeout (in a real app, this would use an AI API)
  setTimeout(() => {
    const analysis = analyzeImage(fileInput.files[0].name);
    resultContainer.innerHTML = `
      <div class="analysis-result">
        <h3>Analysis Results</h3>
        ${analysis}
      </div>
    `;
  }, 1500);
}

// Simulate image analysis (in a real app, this would use an AI API)
function analyzeImage(filename) {
  // Simple mock analysis based on filename
  if (filename.includes('wheat')) {
    return `
      <p><strong>1. Disease identification:</strong> Yellow Rust (Puccinia striiformis) - 85% confidence</p>
      <p><strong>2. Severity assessment:</strong> Moderate</p>
      <p><strong>3. Treatment recommendations:</strong> Apply fungicide containing Tebuconazole or Propiconazole. Ensure complete coverage of leaves.</p>
      <p><strong>4. Preventive measures:</strong> Plant resistant varieties, maintain field hygiene, and implement crop rotation.</p>
      <p><strong>5. Yield impact if untreated:</strong> 30-40% reduction in yield possible</p>
    `;
  } else if (filename.includes('rice')) {
    return `
      <p><strong>1. Disease identification:</strong> Bacterial Leaf Blight (Xanthomonas oryzae) - 92% confidence</p>
      <p><strong>2. Severity assessment:</strong> Severe</p>
      <p><strong>3. Treatment recommendations:</strong> Apply copper-based bactericides. Drain the field to reduce humidity.</p>
      <p><strong>4. Preventive measures:</strong> Use resistant varieties, balanced fertilization, proper spacing.</p>
      <p><strong>5. Yield impact if untreated:</strong> 50-70% reduction in yield possible</p>
    `;
  } else {
    return `
      <p><strong>1. Disease identification:</strong> Healthy plant - 78% confidence</p>
      <p><strong>2. Assessment:</strong> No significant disease detected</p>
      <p><strong>3. Recommendations:</strong> Continue regular monitoring and maintenance</p>
      <p><strong>4. Preventive measures:</strong> Maintain proper irrigation and fertilization schedule</p>
      <p><strong>5. Notes:</strong> Some minor nutrient deficiency may be present, consider soil testing</p>
    `;
  }
}

// Handle crop selection
function handleCropSelection() {
  const cropSelector = document.getElementById('cropSelector');
  const cropInfo = document.getElementById('cropInfo');
  const selectedCrop = cropSelector.value;
  
  if (!selectedCrop) {
    cropInfo.innerHTML = '<p>Please select a crop to see information</p>';
    return;
  }
  
  // Crop data
  const cropData = {
    rice: {
      title: "Rice Cultivation",
      content: "Rice requires consistent water supply. Plant during monsoon season for rainfed cultivation. Watch for leaf blast and stem borer pests.",
      seasons: "Kharif (June-July), Rabi (Nov-Dec)",
      waterNeeds: "High",
      commonPests: "Leaf blast, Stem borer, Brown plant hopper"
    },
    wheat: {
      title: "Wheat Cultivation",
      content: "Wheat grows best in cool weather. Sow in November-December. Ensure proper irrigation at crown root initiation, flowering and grain filling stages.",
      seasons: "Rabi (Nov-Dec)",
      waterNeeds: "Medium",
      commonPests: "Aphids, Termites, Powdery mildew"
    },
    cotton: {
      title: "Cotton Cultivation",
      content: "Cotton needs warm weather and well-drained soil. Watch for bollworms and whiteflies. Avoid waterlogging as it can lead to root rot.",
      seasons: "Kharif (April-May)",
      waterNeeds: "Medium",
      commonPests: "Bollworms, Whiteflies, Thrips"
    }
  };
  
  if (cropData[selectedCrop]) {
    cropInfo.innerHTML = `
      <h3>${cropData[selectedCrop].title}</h3>
      <p>${cropData[selectedCrop].content}</p>
      <div class="crop-details">
        <p><strong>Growing Seasons:</strong> ${cropData[selectedCrop].seasons}</p>
        <p><strong>Water Requirements:</strong> ${cropData[selectedCrop].waterNeeds}</p>
        <p><strong>Common Pests:</strong> ${cropData[selectedCrop].commonPests}</p>
      </div>
    `;
  } else {
    cropInfo.innerHTML = '<p>Information not available</p>';
  }
}
function analyzeCropImage(filename) {
  if (filename.includes('wheat')) {
    return `
      <p><strong>1. Disease identification:</strong> Yellow Rust - 85% confidence</p>
      <p><strong>2. Severity assessment:</strong> Moderate</p>
      <p><strong>3. Treatment recommendations:</strong> Apply fungicide containing Tebuconazole</p>
      <p><strong>4. Preventive measures:</strong> Plant resistant varieties</p>
      <p><strong>5. Yield impact if untreated:</strong> 30-40% reduction possible</p>
    `;
  } else {
    return `<p>Healthy plant detected - 78% confidence</p>`;
  }
}