import React, { useState, useEffect } from "react";
import sanityClient from "./Client.js";
import {PortableText} from '@portabletext/react'



const BlogPost = () => {
  const [blogPost, setBlogPost] = useState(null);
  useEffect(() => {
     sanityClient.fetch(
          `*[_type == "post"]{title,categories,body,publishedAt}`
           )
     .then((data) => {
       setBlogPost(data)
       //console.log(data[0]);
     }, [])
     .catch(console.error)}, []);

  if (!blogPost) return <div>Loading...</div>;

  //console.log(blogPost);
  const bp = JSON.parse(JSON.stringify(blogPost));
  console.log(bp);
  const posts = bp.map((post) =>
      <div class="blog-post">
      <h2 class="blog-post-title">{post.title}</h2>
      <div class="blog-post-body"><PortableText value={post.body}/></div>
      <p class="blog-post-meta">{post.publishedAt}</p>
      </div>
    );
  return (posts);
};

export default BlogPost;
