import React, { Fragment } from "react";

import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import PopularMenu from "../components/PopularMenu";
import ChooseUs from "../components/ChooseUs";
import MenuPack from "../components/MenuPack";
import Testimonials from "../components/Testimonials";
import Download from "../components/Download";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      <Testimonials />
      <Download />
      <Footer />
    </Fragment>
  );
};

export default Home;
