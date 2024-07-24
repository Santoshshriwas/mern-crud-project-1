import React from "react";
import "./Search.css";
import { useState } from "react";
import axios from "axios";
const Search = () => {
  const [empno, setEmpno] = useState("");
  const [mydata, setMydata] = useState([]);
  var ans;

  const handelSubmit = () => {
    let url = "http://localhost:8000/search";
    axios.post(url, { empno: empno }).then((res) => {
      setMydata(res.data);
    });
  };
  if (mydata.length >= 1) {
    ans = mydata.map((key) => {
      return (
        <>
          <tr>
            <td>{key.empno}</td>
            <td>{key.name}</td>
            <td>{key.age}</td>
            <td>{key.salary}</td>
          </tr>
        </>
      );
    });
  }
   else {
    ans = <font>no record found</font>;
  
  }

  return (
    <div className="search">
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          background: "bisque",
        }}
      >
        <h1>Search Record</h1>
        <input
          type="text"
          placeholder="Search..."
          value={empno}
          onChange={(e) => {
            setEmpno(e.target.value);
          }}
        />
        <br />
        <button onClick={handelSubmit}>Search Data</button>
      </div>

      <div className="dis-data">
        <table>
          <tr className="border">
            <td>EMP NO</td>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
          </tr>
          {ans}
        </table>
      </div>
    </div>
  );
};

export default Search;
