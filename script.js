let text = "Only at Spardha!";
let text2 = "Learn music & dance at your own pace through a personalized adaptive learning model that favors your interest and growth. Get a trusted result-oriented curriculum created by industry experts to accelerate your learning. You will also get multiple performance opportunities to boost your confidence and improve your technical skills.";
let typedText = document.getElementById("typed-text");
let charIndex = 0;
let lineIndex = 0;
let lines = [text, text2];
let maxCharactersPerLine = 50;
let currentLine = "";
let throttleTimeout = null;
let throttleDelay = 50; // adjust the delay here (in milliseconds)

function animateTyping() {
  if (charIndex < lines[lineIndex].length) {
    let char = lines[lineIndex][charIndex];
    currentLine += char;
    typedText.innerHTML += char;
    if (char === "!") {
      typedText.innerHTML += "<br>";
      currentLine = "";
    } else if (currentLine.length >= maxCharactersPerLine) {
      typedText.innerHTML += "<br>" + char;
      currentLine = char;
    }
    charIndex++;
  } else {
    lineIndex++;
    charIndex = 0;
    currentLine = "";
    if (lineIndex < lines.length) {
      // call animateTyping() for the next line
    }
  }

  clearTimeout(throttleTimeout);
  throttleTimeout = setTimeout(function() {
    requestAnimationFrame(animateTyping);
  }, throttleDelay);
}

animateTyping();

animateTyping();

// Navigation event listeners
const homeBtn = document.getElementById('home-btn');
const featuresBtn = document.getElementById('features-btn');
const pricingBtn = document.getElementById('pricing-btn');

function handleHomeButtonClick() {
  console.log('Home button clicked!');
  // Add code here to handle the home button click
}


function handlePricingButtonClick() {
  console.log('Pricing button clicked!');
  // Add code here to handle the pricing button click
}

homeBtn.addEventListener('click', handleHomeButtonClick);
featuresBtn.addEventListener('click', handleFeaturesButtonClick);
pricingBtn.addEventListener('click', handlePricingButtonClick);
