// Get the current year and last modified date for the footer
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Static values for temperature and wind speed (to be replaced with API later)
const temperature = 25;  // in Celsius
const windSpeed = 15;  // in km/h

// Function to calculate windchill
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed >= 4.8) {
    return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
  }
  return "N/A"; // Return "N/A" if wind chill calculation doesn't apply
}

// Display the windchill on page load
document.getElementById("windchill").textContent = `Windchill: ${calculateWindChill(temperature, windSpeed)}°C`;
