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
  student.save()
}
module.exports={
  empInsert,
}


