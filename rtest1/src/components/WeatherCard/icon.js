import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 15%;
    opacity: 100%;
    padding: 15px;
  `;

  var icon = "";
  switch (props.condition) {
    case "Clear":
      icon = `./img/Mostly Sunny-2x.png`;
      break;
    case "Clouds":
      icon = `./img/Mostly Cloudy-2x.png`;
      break;
    case "Nighttime Blizzard":
      icon = `./img/Blizzard Night-2x.png`;
      break;
    case "Blizzard":
      icon = `./img/Blizzard-2x.png`;
      break;
    case "Breezy Snow":
      icon = `./img/Breezy Snow-2x.png`;
      break;
    case "Breezy":
      icon = `./img/Breezy-2x.png`;
      break;
    case "Clear Night":
      icon = `./img/Clear Night-2x.png`;
      break;
    case "Nighttime Drizzle":
      icon = `./img/Drizzle Night-2x.png`;
      break;
    case "Dusty":
      icon = `./img/Dust-2x.png`;
      break;
    case "Nighttime Fog":
      icon = `./img/Fog Night-2x.png`;
      break;
    case "Fog":
      icon = `./img/Fog-2x.png`;
      break;
    case "Nighttime Hail":
      icon = `./img/Hail Night-2x.png`;
      break;
    case "Hail":
      icon = `./img/Hail-2x.png`;
      break;
    case "Haze":
      icon = `./img/Haze-2x.png`;
      break;
    case "Nighttime Heavy Rain":
      icon = `./img/Heavy Rain Night-2x.png`;
      break;
    case "Heavy Rain":
      icon = `./img/Heavy Rain-2x.png`;
      break;
    case "Nighttime Mixed Rain":
      icon = `./img/Mix Rainfall Night-2x.png`;
      break;
    case "Nighttime Mostly Cloudy":
      icon = `./img/Mostly Cloudy Night-2x.png`;
      break;
    case "Nighttime Partly Cloudy":
      icon = `./img/Party Cloudy Night-2x.png`;
      break;
    case "Partly Cloudy":
      icon = `./img/Party Cloudy-2x.png`;
      break;
    case "Nighttime Rain":
      icon = `./img/Rain Nght-2x.png`;
      break;
    case "Rain":
      icon = `./img/Rain-2x.png`;
      break;
    case "Nighttime Scattered Showers":
      icon = `./img/Scattered Showers Night-2x.png`;
      break;
    case "Scattered Showers":
      icon = `./img/Scattered Showers-2x.png`;
      break;
    case "Nighttime Scattered Thunderstorm":
      icon = `./img/Scattered Thunderstorm Night-2x.png`;
      break;
    case "Scattered Thunderstorm":
      icon = `./img/Scattered Thunderstorm-2x.png`;
      break;
    case "Nighttime Severe Thunderstorm":
      icon = `./img/Severe Thunderstorm Night-2x.png`;
      break;
    case "Severe Thunderstorm":
      icon = `./img/Severe Thunderstorm-2x.png`;
      break;
    case "Nighttime Sleet":
      icon = `./img/Sleet Night-2x.png`;
      break;
    case "Sleet":
      icon = `./img/Sleet-2x.png`;
      break;
    case "Smokey":
      icon = `./img/Smoke-2x.png`;
      break;
    case "Nighttime Snow":
      icon = `./img/Snow Night-2x.png`;
      break;
    case "Snow":
      icon = `./img/Snow-2x.png`;
      break;
    case "Tornado":
      icon = `./img/Tornado-2x.png`;
      break;
    default:
      icon = `./img/Mostly Cloudy-2x.png`;
      break;
  }

  return (
    <>
      <Icon src={icon} alt="Weather Icon" />
    </>
  );
};

export default Icon;
