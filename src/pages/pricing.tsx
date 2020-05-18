import React from "react";
import Layout from "src/components/Layout";
// import Footer from "src/components/Footer";
import { useTitle } from "react-use";
import { Description, Title } from "src/styles/pricing";
import Column from "src/components/Column";
import PriceCard, { PriceCards } from "src/components/PriceCard";

const Price: React.FC = () => {
  useTitle("Craton | Pricing");

  return (
    <Layout>
      <Column>
        <Title>Our Pricing</Title>
        <Description>
          Nec quis bibendum vestibulum at eget enim. Nec blandit lacus posuere
          nunc semper mattis nec nisi, interdum. Ultrices eget tincidunt
          pulvinar orci varius a urna scelerisque orci. Quis dignissim nunc
          blandit quam accumsan. Elit aenean nibh interdum in non felis.
        </Description>
        <PriceCards>
          <PriceCard level="Basic" price={20} />
          <PriceCard level="Standard" price={40} />
          <PriceCard level="Enterprise" price={60} />
        </PriceCards>
      </Column>
    </Layout>
  );
};

export default Price;
