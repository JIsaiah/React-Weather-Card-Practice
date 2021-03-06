import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.h1`
    font-family: "Varela Round";
    font-size: 2rem;
  `;

  const State = styled.h3`
    font-family: "Varela Round";
    font-size: 1.2rem;
    text-align: center;
    padding: 15px;
  `;

  return (
    <>
      <Temp>{temp}°C</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
