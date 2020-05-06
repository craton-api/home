import React from "react";
import {
  Container,
  Row,
  DarkLogo,
  Content,
  Title,
  Link,
  Anchor,
  Copyright,
  PrimaryStroke,
  SecondaryStroke
} from "./styles";

const Footer = () => (
  <Container>
    <Row>
      <DarkLogo />
      <Content>
        <Title>Seções</Title>
        <Link to="about">Sobre</Link>
        <Link to="projects">Projetos</Link>
        <Link to="technologies">Tecnologias</Link>
        <Link to="contact">Contato</Link>
      </Content>
      <Content>
        <Title>Redes Sociais</Title>
        <Anchor target="_blank" href="https://github.com/danilexx">
          Github
        </Anchor>
        <Anchor
          target="_blank"
          href="https://www.linkedin.com/in/danilo-de-jesus-2a34b21a3/"
        >
          Linkedin
        </Anchor>
      </Content>
    </Row>
    <Copyright>Copyright - 2020</Copyright>
    <PrimaryStroke />
    <SecondaryStroke />
  </Container>
);

export default Footer;
