import React, { useState } from 'react';

function BlogForm() {
    const [author, setAuthor] = useState();
    const [title, setTitle] = useState("New Post");
    const [contnet, setContent] = useState("Content");
    const [category, setCategory] = useState();


    createPost = (e) => {
        e.preventDefault();

        console.log("Title is :" + title)
        }

        return (
            <form onSubmit={createPost} className="col-md-10">
                <legend className="text-center">Create New Post</legend>

                <div className="form-group">
                    <label>Title for the Post:</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Title.." />
                </div>

                <div className="form-group">
                    <label>Author:</label>
                    <input type="text" ref={this.authorRef} className="form-control" placeholder="Tag your name.." />
                </div>

                <div className="form-group">
                    <label>Content:</label>
                    <textarea className="form-control" rows="7"cols="25" ref={this.contentRef} placeholder="Here write your content.."></textarea>
                </div>

                <div className="form-group">
                    <label>Category</label>
                <select ref={this.categoryRef} className="form-control">
                    <option value="cars">Cars</option>
                    <option value="nature">Nature</option>
                    <option value="it">IT</option>
                    <option value="books">Books</option>
                    <option value="sport">Sport</option>
                </select>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
         );
}

export default BlogForm;
