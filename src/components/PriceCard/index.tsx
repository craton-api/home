import React from "react";
import {
  Container,
  Head,
  Price,
  Number,
  Time,
  Advantage,
  Advantages,
  Button
} from "./styles";

export { PriceCards } from "./styles";

interface Props {
  level: string;
  price: number;
}

const PriceCard: React.FC<Props> = ({ level = "Basic", price = 19 }) => {
  return (
    <Container>
      <Head>{level}</Head>
      <Price>
        <Number>R${price}</Number>
        <Time>/mo</Time>
      </Price>
      <Head>Features</Head>
      <Advantages>
        <Advantage>API Acess</Advantage>
        <Advantage>Hosting</Advantage>
        <Advantage>Product Management</Advantage>
        <Advantage>Credit Card Transactions</Advantage>
        <Advantage>Boletos Transactions</Advantage>
        <Advantage>Ethereum Transactions</Advantage>
        <Advantage>MarketPlaces</Advantage>
        <Advantage>Email Strategy</Advantage>
        <Advantage>Data Analysis</Advantage>
        <Advantage>Store Templates</Advantage>
      </Advantages>
      <Button>Get Started</Button>
    </Container>
  );
};

export default PriceCard;
