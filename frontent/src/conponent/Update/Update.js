import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import edit from "../image/edit.jpeg";
import del from "../image/delete.jpeg";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const myNav = useNavigate();
  const [mydata, setMydata] = useState([]);
  const loadData = () => {
    let url = `http://localhost:8000/update`;
    axios.get(url).then((res) => {
      // console.log(res.data)
      setMydata(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  const recdelete = (id) => {
    let url = `http://localhost:8000/delete`;
    axios.post(url, { id: id }).then((res) => {
      alert("Delete Successfully");
      loadData();
    });
  };
  const recedit = (id) => {
    myNav("/edit/"+id);
    // alert(id)
  };

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.empno}</td>
          <td>{key.name}</td>
          <td>{key.age}</td>
          <td>{key.salary}</td>
          <td>
            <a
              href="#"
              onClick={() => {
                recedit(key._id);
              }}
            >
              <img src={edit} width="20" height="20px" />
            </a>
          </td>
          <td>
            <a
              href="#"
              onClick={() => {
                recdelete(key._id);
              }}
            >
              <img src={del} width="20" height="20px" />
            </a>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div>
      <h1>Update Youe Emp Data</h1>
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

export default Update;
