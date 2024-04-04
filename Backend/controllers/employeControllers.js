const empModel = require ("../models/employeModel");
const empInsert =(req,res)=>{
   
  let sempno= req.body.empno;
  let sname= req.body.name;
  let sage= req.body.age;
  let ssalary= req.body.salary;

  const student= new empModel({
    empno:sempno,
    name:sname,
    age:sage,
    salary:ssalary
  })
  student.save();
  res.send("Data Save");
}


const empDisplaydata=(req,res)=>{
   empModel.find().then((data)=>{
    res.send(data);
   })
}
const empUpdatedata=async(req,res)=>{
   empModel.find().then((data)=>{
    res.json(data);
   })
}
const empDelatedata=async(req,res)=>{
     let id= req.body.id;
     empModel.findByIdAndDelete(id).then((data)=>{
      res.json("record delete")
     })
    
}

module.exports={
  empInsert,
  empDisplaydata,
  empUpdatedata,
  empDelatedata
}


