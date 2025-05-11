import React from "react"
import Banner from "../components/home/Banner"
import About from "./About"
import Process from "./Process"
import Portfolio from "./Portfolio"
import Blog from "./Blog"
import Service from "./Service"
import ProjectIdia from "../components/home/ProjectIdia"
import Clients from "../components/home/Clients"
import Testimonial from "../components/home/Testimonial"

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Process />
      <Portfolio />
      <ProjectIdia />
      <Blog />
      <Service />
      <Clients />
      <Testimonial />
    </>
  );
};

export default Home;
