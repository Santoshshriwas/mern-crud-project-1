import React, { useState } from "react";
import axios from "axios";
const Insert = () => {
  const [input, setInput] = useState({});
  const handelInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const onSubmit = () => {
    let url = `http://localhost:8000/insert`;
    axios.post(url, input).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <h1>This Is a Insert Page</h1>
      Enter Emp No{" "}
      <input
        type="number"
        value={input.empno}
        placeholder="Enter Employee Number"
        name="empno"
        onChange={handelInput}
      />
      <br />
      Name:{" "}
      <input
        type="text"
        value={input.name}
        placeholder="Enter Your Name"
        name="name"
        onChange={handelInput}
      />
      <br />
      Age :{" "}
      <input
        type="number"
        value={input.age}
        placeholder="Age"
        name="age"
        onChange={handelInput}
      />
      <br />
      Salary :{" "}
      <input
        type="number"
        value={input.salary}
        placeholder="Salary"
        name="salary"
        onChange={handelInput}
      />
      <br />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default Insert;
