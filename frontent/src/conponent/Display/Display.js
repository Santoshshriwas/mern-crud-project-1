import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Display.css";
const Display = () => {
  const [empData, setEmpData] = useState([]);

  const loadData = () => {
    axios.get(`http://localhost:8000/empdisplay`).then((res) => {
      setEmpData(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const ans = empData.map((key) => {
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

  return (
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
  );
};

export default Display;
