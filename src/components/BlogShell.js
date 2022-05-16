import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import BlogPost from "./BlogPost.js";

const BlogShell = (props) => {
  return (
    <div class="col-md-8 blog-main">
      <h3 class="pb-3 mb-4 font-italic border-bottom">{props.title}</h3>
      <BlogPost />
    </div>
  );
};

export default BlogShell;
