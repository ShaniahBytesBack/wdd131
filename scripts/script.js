const temperatureCelsius = 29;
const windSpeedMph = 12; 

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function mphToKmh(mph) {
  return mph * 1.60934;
}

function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  }
  return 'N/A';
}

window.onload = function() {
  const temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
  const windSpeedKmh = mphToKmh(windSpeedMph);

  document.querySelector('.weather ul li span').textContent = `${temperatureFahrenheit.toFixed(1)}°F`;

  const windChill = calculateWindChill(temperatureCelsius, windSpeedKmh);
  document.getElementById('windChill').textContent = windChill === 'N/A' ? 'N/A' : `${windChill.toFixed(1)}°C`;

  document.getElementById('lastModified').textContent = document.lastModified;
};

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;