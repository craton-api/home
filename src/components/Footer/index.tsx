import React from "react";
import {
  Container,
  Row,
  DarkLogo,
  Content,
  Title,
  Link,
  Anchor,
  Copyright
} from "./styles";

const Footer = () => (
  <Container>
    <Row>
      <DarkLogo />
      <Content>
        <Title>Seções</Title>
        <Link href="pricing">Pricing</Link>
        <Link href="about">About</Link>
        <Link href="docs">Docs</Link>
        <Link href="team">Team</Link>
        <Link href="support">Support</Link>
        <Link href="register">Start Now</Link>
      </Content>
      <Content>
        <Title>Documentation</Title>
        <Anchor target="_blank" href="#">
          Get Started
        </Anchor>
        <Anchor target="_blank" href="#">
          Products
        </Anchor>
        <Anchor target="_blank" href="#">
          Payments
        </Anchor>
      </Content>
      <Content>
        <Title>Support</Title>
        <Anchor target="_blank" href="#">
          FAQ
        </Anchor>
        <Anchor target="_blank" href="#">
          My Account
        </Anchor>
        <Anchor target="_blank" href="#">
          About
        </Anchor>
      </Content>
      <Content>
        <Title>Social Media</Title>
        <Anchor target="_blank" href="#">
          Facebook
        </Anchor>
        <Anchor target="_blank" href="#">
          Twitter
        </Anchor>
        <Anchor target="_blank" href="#">
          Instagram
        </Anchor>
      </Content>
    </Row>
    <Copyright>Copyright - 2020</Copyright>
  </Container>
);

export default Footer;
