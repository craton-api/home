import React from "react";
import { useTitle } from "react-use";
import ApresentationSection from "src/Sections/Apresentation";

const Home: React.FC = () => {
  useTitle("Craton | Home");

  return (
    <>
      <ApresentationSection />
    </>
  );
};

export default Home;
