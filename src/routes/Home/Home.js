import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "@constants/url";

const Home = () => (
  <>
    <h1>Utilities</h1>
    <ul>
      <li>
        <Link to={ROUTE_PATH.COLOR_FINDER}>Color Finder</Link>
      </li>
    </ul>
  </>
);

export default Home;
