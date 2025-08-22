import React from "react";
import Banner from "../modules/banner";
import Attribute from "../modules/attribute";
import AboutUs from "../modules/aboutUs";
import Customer from "../modules/customer";
import OrderProgress from "../modules/orderProgress";
import CompareModal from "../ui/compareModal";

function HomePage() {
  return (
    <>
      <Banner />
      <Attribute />
      <AboutUs />
      <Customer />
      <OrderProgress />
      <CompareModal />
    </>
  );
}

export default HomePage;
