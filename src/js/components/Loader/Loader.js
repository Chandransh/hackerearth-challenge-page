'use strict';
import React, {Component} from 'react';
import './Loader.css';

const quotes = [
"Programs must be written for people to read, and only incidentally for machines to execute. ~ Harold Abelson",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. ~ John Woods",
  "Progress is possible only if we train ourselves to think about programs without thinking of them as pieces of executable code. ~ Edsger W. Dijkstra",
  "The feeling of having implemented something innovative as part of a great team is priceless. ~ A Hackathon Enthusiast"
];

const Loader = () => (
  <div className="loader-container">
    <p className="text-center col-sm-6 center-block">
      {quotes[Math.floor(Math.random()*quotes.length)]}
    </p>
    <div>
      <div className="loader"></div>
    </div>
  </div>
);

export default Loader;