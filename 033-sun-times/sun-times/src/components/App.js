import React, { useState } from 'react';
import axios from 'axios';
import tzlookup from 'tz-lookup';

const formatApiDate = date => {
  let d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
};

const toLocalizedTime = (dateString, lat, long) => {
  return new Date(dateString).toLocaleString('en-US', {
    timeZone: tzlookup(lat, long),
  });
};

const App = () => {
  const today = new Date();
  const [sunset, setSunset] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [location, setLocation] = useState('Boston, MA');

  const handleSubmit = () => {
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURI(
          location
        )}&key=${process.env.REACT_APP_OPEN_CAGE_API_KEY}`
      )
      .then(response => {
        const geometry = response.data.results[0].geometry;

        axios
          .get(
            `https://api.sunrise-sunset.org/json?lat=${geometry.lat}&lng=${
              geometry.lng
            }&date=${formatApiDate(today)}&formatted=0`
          )
          .then(response => {
            console.log(geometry);
            setSunrise(
              toLocalizedTime(
                response.data.results.sunrise,
                geometry.lat,
                geometry.lng
              )
            );
            setSunset(
              toLocalizedTime(
                response.data.results.sunset,
                geometry.lat,
                geometry.lng
              )
            );
          });
      });
  };

  return (
    <div>
      <p>Sunrise: {JSON.stringify(sunrise)}</p>
      <p>Sunset: {JSON.stringify(sunset)}</p>

      <label htmlFor="location">Location</label>
      <input
        id="location"
        value={location}
        onChange={e => setLocation(e.target.value)}
        type="text"
      />

      <button onClick={handleSubmit}>Get Times!</button>
    </div>
  );
};

export default App;
