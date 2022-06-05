import React, { useState } from "react";

const Navbar = (props) => {

  const items = props.titles.split(",");
  const listItems = items.map((item) => (
    <a key={item} class="p-2 text-muted" href={item}>
      {" "}
      {item}{" "}
    </a>
  ));

  return <nav class="nav d-flex justify-content-between">{listItems}</nav>;
};

export default Navbar;
