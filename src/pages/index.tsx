import React from "react";
import Layout from "src/components/Layout";
// import Footer from "src/components/Footer";
import { useTitle } from "react-use";
import ApresentationSection from "src/Sections/Apresentation";

const Home: React.FC = () => {
  useTitle("Craton | Home");

  return (
    <Layout>
      <ApresentationSection />
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
