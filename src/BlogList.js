const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs; /* same thing as prop here
  //   const title = props.title; /* same thing as prop here

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2> {blog.title} </h2>
          <p> {blog.body} </p>
          {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
