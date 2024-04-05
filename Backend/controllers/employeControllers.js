const empModel = require("../models/employeModel");
const empInsert = (req, res) => {
  let sempno = req.body.empno;
  let sname = req.body.name;
  let sage = req.body.age;
  let ssalary = req.body.salary;

  const student = new empModel({
    empno: sempno,
    name: sname,
    age: sage,
    salary: ssalary,
  });
  student.save();
  res.send("Data Save");
};

const empDisplaydata = (req, res) => {
  empModel.find().then((data) => {
    res.send(data);
  });
};
const empUpdatedata = async (req, res) => {
  empModel.find().then((data) => {
    res.json(data);
  });
};
const empDelatedata = async (req, res) => {
  let id = req.body.id;
  empModel.findByIdAndDelete(id).then((data) => {
    res.json("record delete");
  });
};

const editdata = async (req, res) => {
  let id = req.body.id;
  //  console.log(id);
  //  res.send("ok")
  empModel.findById(id).then((data) => {
    res.json(data);
  });
};

const editsavedata = async (req, res) => {
  let id = req.body._id;
  let upemp = req.body.empno;
  let upname = req.body.name;
  let upage = req.body.age;
  let upsalary = req.body.salary;

  empModel
    .findByIdAndUpdate(id, {
      empno: upemp,
      name: upname,
      age: upage,
      salary: upsalary,
    })
    .then((data) => {
      res.send("update is done");
    });
};
module.exports = {
  empInsert,
  empDisplaydata,
  empUpdatedata,
  empDelatedata,
  editdata,
  editsavedata,
};
