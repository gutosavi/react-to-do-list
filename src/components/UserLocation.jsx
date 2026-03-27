import React from 'react';

const UserLocation = ({ onLocation }) => {
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        onLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        if (error.code === 1) {
          setError(error.message);
        } else {
          setError('Erro ao obter a localização');
        }
      },
    );
  }, []);

  if (error) return <p>{error}</p>;

  return <></>;
};

export default UserLocation;
