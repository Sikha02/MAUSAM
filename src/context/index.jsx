import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState('odisha');
  const [location, setLocation] = useState('');

  // Fetch API
  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      console.log(response.data);
      const thisData = response.data;
      setLocation(thisData.city.name);
      setValues(thisData.list);
      setWeather(thisData.list[0]);

    } catch (e) {
      console.error(e);
      alert('This place does not exist or there was an error fetching the weather data');
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <StateContext.Provider value={{
      weather,
      setPlace,
      values,
      location
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
