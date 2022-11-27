import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
  About
    <h2>About Me</h2>
    <p>Mucver is the silliest cat in the world. Her favorite toy is a drawstring and I am still, buying bunch of toys for this stupid face...</p>
    <img src={image} alt="I made this"></img>
  </div>
  );
}

export default About;
