import React from "react";
import "../CSS/Screnn1a.css";

export default function FirstScreen() {
  return (
    <div className="container">
      <div className="logo"></div>

      <div className="title">
        <h1>GROW</h1>
        <h1>YOUR BUSINESS</h1>
      </div>
      <div className="description">
        <p>we will help you to grow your business using online server</p>
      </div>
      <div className="button-row">
        <button className="btn">LOGIN</button>
        <button className="btn">SIGN UP</button>
      </div>
      <div className="read-more"><h3>HOW WE WORK ?</h3></div>
    </div>
  );
}
