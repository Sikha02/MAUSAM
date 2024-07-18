import { useEffect, useState } from "react";
import { useStateContext } from "../context";
import clear from "../assets/images/clear.gif";
import cloudy from "../assets/images/cloudy.gif";
import fog from "../assets/images/fog.gif";
import rain from "../assets/images/rain.gif";
import snow from "../assets/images/snow.gif";
import thunder from "../assets/images/thunder.gif";
import wind from "../assets/images/wind.gif";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(clear);

  useEffect(() => {
    if (weather.weather) {
      let imageString = weather.weather[0].main;
      if (imageString.toLowerCase().includes('clear')) {
        setImage(clear);
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(cloudy);
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(fog);
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('drizzle')) {
        setImage(rain);
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(snow);
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(thunder);
      } else if (imageString.toLowerCase().includes('wind')) {
        setImage(wind);
      }
    }
  }, [weather]);

  return (
    <img src={image} alt="weather_image" className="h-screen w-full fixed left-0 top-0 -z-[10]"/>
  );
};

export default BackgroundLayout;
