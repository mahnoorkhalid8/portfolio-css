"use client"

import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div id="hero">
      <Navbar />
<div className="hero-sec">
      <div>
        <img
          src="dp.png"
          alt="profile picture"
          className="hero-img"
        />
      </div>
      <h2
        className="hero-h"
        data-aos="zoom-out"
      >
        I&apos;m Mahnoor Khalid
      </h2>
</div>
    </div>
  );
};

export default Hero;
