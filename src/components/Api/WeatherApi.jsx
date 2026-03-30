import React from 'react';
import './WeatherApi.css';

const WeatherApi = ({ coords }) => {
  const [weather, setWeather] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;

  React.useEffect(() => {
    if (!coords) return;

    const fetchApi = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric&lang=pt_br`,
        );

        const json = await response.json();

        setWeather({
          city: json.name,
          country: json.sys.country,
          temp: json.main.temp,
          icon: json.weather[0].icon,
          description: json.weather[0].description,
        });
      } catch (error) {
        console.error('ERRO', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, [coords]);

  if (!coords) return <p>Obtendo localização...</p>;
  if (loading) return <p>Carregando clima...</p>;
  if (!weather) return null;

  return (
    <>
      <div className="weather-container">
        <div className="weather-temp">
          <p>{weather.city} </p>
          <p>
            {weather.temp.toFixed(1).toString().replace('.', ',')}
            <sup>C°</sup>
          </p>
        </div>
        <div className="temp-description">
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt=""
          />
          <p>{weather.description}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherApi;
