import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Edit = () => {

   const [mydata,setMydata]= useState({});


   const loadData=()=>{
    let url = 'http://localhost:8000/edit'
    axios.post(url,{id:id}).then((res)=>{
      setMydata(res.data);
    })
   }

   useEffect(()=>{
    loadData();
   },[])

   const handelInput=(e)=>{
         let name = e.target.name;
         let value = e.target.value;
         setMydata(values=>({...values, [name]:value}))
   }

   const handelSubmit=()=>{
    // console.log(mydata);
    let url="http://localhost:8000/editsave";
    axios.post(url,mydata).then((res)=>{
        // console.log(res.data);
        alert("Record Updated Successfully");
    })
   }


  const { id } = useParams();
  return (
    <div>
      <h1>Edit Data EMP </h1>
      <div  className="form-container-1">
      <form>
        <input
          type="number"
          value={mydata.empno}
          placeholder="Enter Employee Number"
          name="empno"
          onChange={handelInput}
        />
        <br />
        <input
          type="text"
          value={mydata.name}
          placeholder="Enter Your Name"
          name="name"
          onChange={handelInput}
        />
        <br />
        <input
          type="number"
          value={mydata.age}
          placeholder="Age"
          name="age"
          onChange={handelInput}
        />
        <br />
        <input
          type="number"
          value={mydata.salary}
          placeholder="Salary"
          name="salary"
          onChange={handelInput}
        />
        <br />
        <button onClick={handelSubmit}>Submit</button>
      </form>
     </div>
    </div>
  );
};
export default Edit;
