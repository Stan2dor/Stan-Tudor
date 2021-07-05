import { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, body }) => {
  //   const blogs = props.blogs; /* same thing as prop here
  //   const title = props.title; /* same thing as prop here

  /* DELETE BLOG FUNCTION
  -----------------------------------*/
  const [props, setProps] = useState(blogs);
  // const setData = new blogs();

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setProps(newBlogs);
  };

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      <p>{body}</p>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2> {blog.title} </h2>
            <p> {blog.body} </p>
            {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
