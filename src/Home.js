import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const [name, setName] = useState("Stan Tudor");
  const [age, setAge] = useState(47);

  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')


  /* DELETE BLOG FUNCTION
  -----------------------------------*/
  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };


    /* RUN EFFECTS HERE:
  -----------------------------------*/
  useEffect(() => {
    console.log("use effect run");
  }, [name]);

  const handleClickName = () => {
    setName("Alex");
    setAge(2);
  };
  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>loading... dont wait too long</div>}
      <h2>My h2 Title here</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClickName}>My son</button>
      <button onClick={() => handleClickAgain("stranger")}>My Dogs</button>
      <button onClick={() => setName("John Tudor")}>Change my name</button>
      {blogs && <BlogList blogs={blogs} title="blogs:" />}
    </div>
  );
};

export default Home;
