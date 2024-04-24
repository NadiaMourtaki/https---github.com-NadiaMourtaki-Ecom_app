import React from "react";
import { Hero } from "../components/Hero/Hero"; 
import Pop from "../components/Popular/Pop"; 
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";


const Shop = () => {
  return (
    <div>
      <Hero />
      <Pop/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  );
};

export default Shop;
