import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const Temp = styled.h1`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 2rem;
  `;

  const State = styled.h3`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 1.2rem;
  `;

  return (
    <>
      <Temp>20°C</Temp>
      <State className="condition">Cloudy</State>
    </>
  );
};

export default Condition;
