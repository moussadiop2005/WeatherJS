// Init Storage class
const storage = new Storage();

// get stored weather location data
const weatherLocation = storage.getLocationData();

// Init Weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state, weatherLocation.country);

// Init UI class
const ui = new UI();

// get weather on dom load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  // Change location
  weather.changeLocation(city, state, country);

  // Set location in local storage
  storage.setLocationData(city, state, country);

  // get and display weather
  getWeather();

  // hide modal
  const weatherModal = document.querySelector("#locModal");
  const modal = bootstrap.Modal.getInstance(weatherModal);
  modal.hide();
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
