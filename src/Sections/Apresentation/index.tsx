import React from "react";
import {
  ApresentationImage,
  Container,
  ApresentationInfo,
  BigText,
  Description,
  Button
} from "./styles";

const ApresentationSection = () => {
  return (
    <Container>
      <ApresentationInfo>
        <BigText>
          Understanding <br />
          Craton
        </BigText>
        <Description>The Platform for the future</Description>
        <Button>Get Started</Button>
      </ApresentationInfo>

      <ApresentationImage />
    </Container>
  );
};

export default ApresentationSection;
