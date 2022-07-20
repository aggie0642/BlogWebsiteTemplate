import React, { useState } from "react";

const Navbar = (props) => {

  const items = props.titles.split(",");
  const listItems = items.map((item) => (
    <a key={item} class="p-2 text-slate-900" href={item}>
      {" "}
      {item}{" "}
    </a>
  ));

  return <nav class="nav d-flex bg-slate-400">{listItems}</nav>;
};

export default Navbar;
