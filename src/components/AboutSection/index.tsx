import React from "react";
import { Container, Title, Content } from "./styles";

interface Props {
  title: string;
}

const AboutSection: React.FC<Props> = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        Dignissim diam sit blandit mauris pharetra, platea lacus pulvinar.
        Consequat fames adipiscing dignissim rhoncus, imperdiet viverra
        sagittis, ipsum in. Elementum velit amet massa ipsum. Varius egestas a
        egestas quis nulla a, massa dui, habitasse. Urna in velit dignissim
        viverra. Pharetra, quisque posuere amet, at tellus id sit. Turpis metus
        neque, sit malesuada rhoncus vitae porttitor.
        {children}
      </Content>
    </Container>
  );
};

export default AboutSection;
