import React from "react";

import "./Weather.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <a
          href="https://github.com/Morenibose/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced on Github
        </a>
        ,coded by Morenike Adebayo and ,
        <a
          href="https://silver-griffin-280183.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </small>
    </div>
  );
}
