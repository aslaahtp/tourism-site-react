import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import cardData from "./components/cardData";
import "./style.css";

// A Functional Component
function MyApp() {
  let card=cardData.map((cardItem)=>{
    return(
      <Card
        cardContent={{
          imgSrc:cardItem.imgSrc,
          name: cardItem.name,
          phone: cardItem.phone,
          email: cardItem.email
        }}
      />
    )
  })
  return (
    <div>
      <Header />
      <Hero />
      <div className="card-container">{card}</div> 
      <Footer />
    </div>
  );
}

export default MyApp;
