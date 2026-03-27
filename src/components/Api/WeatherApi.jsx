import React from 'react';

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
      setWeather(json);
      console.log(json.name);
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

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {weather.name}
      {weather.main.temp}
      {weather.weather[0].icon}
    </div>
  );
};

export default WeatherApi;
