import React from "react";

import "./Weather.css";

export default function City() {
  return (
    <div className="overview">
      <h1 className="city">Lagos</h1>
      <ul>
        <li>Last updated: </li>
        <li className="description">Description</li>
      </ul>
    </div>
  );
}
