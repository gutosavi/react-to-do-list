import React from 'react';
import './WeatherApi.css';

const WeatherApi = () => {
  const [weather, setWeather] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const apiKey = '8a60b2de14f7a17c7a11706b2cfcd87c';
  const cityName = 'São Paulo';

  const fetchApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`,
      );
      const json = await response.json();
      console.log(json);

      setWeather({
        city: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        icon: json.weather[0].icon,
        description: json.weather[0].description,
      });
      setLoading(false);
    } catch (error) {
      console.error('ERRO', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchApi();
  }, []);

  /* 
  {weather.main.temp}
  {weather.weather[0].icon} 
      */

  return (
    <div className="weather-container">
      <div className="weather-temp">
        {loading && <p>Carregando...</p>}
        {weather.city} {weather.temp.toFixed(1).toString().replace('.', ',')}
        <sup>C°</sup>
      </div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt=""
        />
      </div>
    </div>
  );
};

export default WeatherApi;
