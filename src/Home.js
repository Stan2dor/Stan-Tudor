import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [name, setName] = useState("Stan Tudor");
  const [age, setAge] = useState(47);

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  useEffect(() => {
    console.log("use effect run");
  }, [name]);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("couldnt fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  const handleClickName = () => {
    setName("Alex");
    setAge(2);
  };

  //   const handleClick = () => {
  //     console.log("hello Stanley!");
  //   };
  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>loading... dont wait too long</div>}
      {/* <h2>My Blog</h2> */}
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClickName}>My son</button>
      <button onClick={() => handleClickAgain("stranger")}>My Dogs</button>
      <button onClick={() => setName("John Tudor")}>Change my name</button>
      {blogs && <BlogList blogs={blogs} title='All blogs' />}
    </div>
  );
};

export default Home;
