import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useForm } from "react-hook-form";

const Home = () => {
  const [name, setName] = useState("Stan");
  const [age, setAge] = useState(47);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  /* RUN EFFECTS HERE:
  -----------------------------------*/
  useEffect(() => {
    console.log("use effect run");
  }, [name]);

  const handleClickName = () => {
    setName("Alexander");
    setAge(2);
  };
  const handleClickAgain = (name) => {
    setName("Bobi");
    setAge(5);
    console.log("hello " + name);
  };

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>loading... dont wait too long</div>}
      <h2>Learn something new everyday...</h2>
      <p>my first React project</p>
      <p className='pTag-func'>
        {name} is {age} years old
      </p>
      <div className='buttons'>
        <button onClick={handleClickName}>My son</button>
        <button onClick={() => handleClickAgain("My Dog")}>My Dog</button>
        <button onClick={() => setName("Stan Tudor") + setAge(48)}>
          Full name:
        </button>
      </div>
      <div className='blog-section'>
        {blogs && <BlogList blogs={blogs} title='Blog:' />}
      </div>
      <div className='users'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Users data:</h1>
          <input {...register("firstName")} placeholder='First name' />
          <input {...register("lastName")} placeholder='Last name' />
          <select {...register("category")}>
            <option value=''>Select...</option>
            <option value='A'>Category A</option>
            <option value='B'>Category B</option>
          </select>
          <input type='submit' title='Users:' />
        </form>
      </div>
    </div>
  );
};

export default Home;
