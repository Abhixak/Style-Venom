import React from "react";
import Header from "../Components/Header";
import AdSlides from "../Components/AdSlides";
import Navbar from "../Components/Navbar";
import Categories from "../Components/Categories";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <AdSlides />
      <br />
      <Categories />
      <br /><br />
    </div>
  );
};

export default Home;
