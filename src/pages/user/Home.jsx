import React from "react";
import Nav from "../../Components/user/Nav";
import Hero from "../../Components/user/Hero";
import FeaturedBooks from "../../Components/user/FeaturedBooks";
import Footer from "../../Components/user/Footer";
import About from "../../Components/user/About";
import AuthorsPage from "../../Components/user/AuthorsPage";


const Home = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <FeaturedBooks/>
      <AuthorsPage/>
      <About/>
      <Footer/>

    </>
  );
};

export default Home;
