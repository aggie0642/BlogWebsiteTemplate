import React, { useState, useEffect } from "react";
import sanityClient from "./Client.js";
import {PortableText} from '@portabletext/react'

const Sidebar = (props) => {
  const d = props.display;
  const [about, setAbout] = useState(null);
  useEffect(() => {
     sanityClient.fetch(
          `*[_type == "about"]{body}`
           )
     .then((data) => {
       setAbout(data);
       console.log(data);
     }, [])
     .catch(console.error)}, []);
  const ab = JSON.parse(JSON.stringify(about));
  console.log(ab);

  if (!about) return <div>Loading...</div>;

  const aboutSection = ab.map((description) =>
  <aside class="col-md-4 blog-sidebar bg-slate-100">
    <div class="p-3 mb-3 rounded">
      <h4 class="font-italic">About</h4>
      <div clss="about-body"><PortableText value={description.body}/></div>
    </div>

    <div class="p-3">
      <h4 class="font-italic">Archives</h4>
      <ol class="list-unstyled mb-0">
        <li>
          <a href="#">March 2014</a>
        </li>
      </ol>
    </div>

    <div class="p-3">
      <h4 class="font-italic">Categories</h4>
      <ol class="list-unstyled">
        <li>
          <a href="#">GitHub</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
      </ol>
    </div>
  </aside>
  );

  if (d == "True") {
    return (aboutSection);
    }
};

export default Sidebar;
