import React from "react";
import { CONTAINERS } from "./Layout";

const Header = () => {
  return (
    <header data-container={CONTAINERS.header}>
      <p className="fs-05 ff-bold">Header</p>
    </header>
  );
};

export default Header;
