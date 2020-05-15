import React from "react";
import styled from "@emotion/styled";

const Location = ({ city, country }) => {
  const Container = styled.div`
    text-align: center;
  `;

  const City = styled.h1`
    font-family: "Varela Round";
    font-size: 1.6em;
    padding-left: 15px;
  `;

  const Country = styled.h3`
    font-family: "Varela Round";
    font-size: 1.1rem;
    padding-left: 1px;
  `;

  return (
    <Container>
      <City>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;
