import React from "react";
import Layout from "src/components/Layout";
// import Footer from "src/components/Footer";
import { useTitle } from "react-use";
import { Title, SubTitle } from "src/styles/about";
import Column from "src/components/Column";
import AboutSection from "src/components/AboutSection";

const About: React.FC = () => {
  useTitle("Craton | About");

  return (
    <Layout>
      <Column>
        <Title>About Craton</Title>
        <SubTitle>Overview</SubTitle>
        <AboutSection title="1. Understaning Craton Platform" />
        <AboutSection title="2. What we offer:">
          <AboutSection title="1. Product Management" />
          <AboutSection title="2. Transactions / Payments Options" />
        </AboutSection>
      </Column>
      {/* <Footer /> */}
    </Layout>
  );
};

export default About;
