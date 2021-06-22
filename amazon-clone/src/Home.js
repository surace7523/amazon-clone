import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home__Image" src="/images/homee.jpg" alt="" />

      {/*Product id, title, price, rating , image* */}
      <div className="home__row">
        <Product
          id="12121"
          title="Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device"
          price={11}
          rating={5}
          image="/images/firesticks.jpg"
        />

        <Product
          id="12122"
          title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
          price={114}
          rating={4}
          image="/images/Echo.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12123"
          title="Amazon Basics 5-Cup (25 Oz) Coffeemaker with Glass Carafe and Reusable Filter, Black"
          price={45}
          rating={3}
          image="/images/coffee.jpg"
        />

        <Product
          id="12124"
          title="Magnetic Levitating Moon Lamp, FIRPOW 16 Colors Floating and Spinning in Air Freely and 3D Printing LED Moon Light"
          price={199}
          rating={2}
          image="/images/lamp.jpg"
        />

        <Product
          id="12125"
          title="jGalaxy Projector Night Light Star Moon Lamp with LED Universe Nebula Projector with 40 Colors Mini Star Projector for Kids Bedroom ,Party, Home"
          price={59}
          rating={5}
          image="/images/light.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12126"
          title="Luna Controller – The best wireless controller for Luna, Amazon’s new cloud gaming service"
          price={60}
          rating={5}
          image="/images/remote.jpg"
        />

        <Product
          id="12127"
          title="ASUS ZenBook Flip 13 OLED Ultra Slim Convertible Laptop, 13.3” OLED FHD Touch Screen, Intel Evo Platform Core i7-1165G7 Processor"
          price={1121}
          rating={4}
          image="/images/laptop.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12128"
          title="NordicTrack T Series Treadmill"
          price={660}
          rating={5}
          image="/images/Trademill.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
