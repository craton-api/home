import React from "react";
import Layout from "src/components/Layout";
import Nav from "src/components/Nav";
// import Footer from "src/components/Footer";
import { useTitle } from "react-use";

const Home: React.FC = () => {
  useTitle("Craton | Home");

  return (
    <Layout>
      <Nav />
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
