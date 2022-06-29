class Weather {
  constructor(city, state, country) {
    this.apiKey = "dbce6f797d132b93eac836795cda9504";
    this.city = city;
    this.state = state;
    this.country = country;
  }

  //fetch weather from api
  async getWeather() {
    const responseLoc = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.state},${this.country}&appid=${this.apiKey}`);
    const locData = await responseLoc.json();
    const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locData[0].lat}&lon=${locData[0].lon}&units=metric&appid=${this.apiKey}`);
    const weatherData = await responseWeather.json();
    return weatherData;
  }

  changeLocation(city, state, country) {
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
