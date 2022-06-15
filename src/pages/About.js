import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/profile.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src = {profile}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Danny Jalen Grandison</div>
          <div className="brief_description">
            I am a sophmore at North Carolina Agricultural and Technical State University and I like video games, drawing, anime, and rollerblading.
          </div>
        </div>
      </div>
    </div>
    )
  }
}