const express=require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Users  = require('../models/user.js');
const Emploeyee  = require('../models/employee.js');

// Get api for  all users
 router.get('/users',(req,res)=>{
     Users.find({},(err, User)=>{
         if(!err){
             res.send(User)
         }else{

             console.log(err);
         }
     });
 });

//post  api for users 

router.post('/users/add', (req, res) => {
    const user = new Users({
        User_id : req.body.User_id,
        Name: req.body.Name,
        UserName: req.body.UserName,
        password: req.body.password
    });
    user.save((err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'User Added Successfully', addEmployee: data})
        } else {
           console.log(err);
        }
    });
});

//Post api For Employee
router.post('/employee/add',(req,res)=>{
    const emp =new Emploeyee ({
        Employee_id :req.body.Employee_id,
        EmployeeName:req.body.EmployeeName,
        Status :req.body.Status,
    });
    emp.save((err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Employee Added Successfully', addEmployee: data})
        } else {
           console.log(err);
        }
    });
})

//get api for  All Employee
router.get('/employees',(req,res)=>{
    Emploeyee.find({},(err,data)=>{
        if(!err){
            res.send(data);
        }else{

            console.log(err);
        }
    });
});

// serach  employee by id
router.get('/employee/:id', (req, res) => {
        if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record With Given ID : ${req.params.id}`);
    
        Emploeyee.findById(req.params.id, (err, data) => {
            if(!err) {
                res.send(data);
            } else {
               console.log(err);
            }
        });
    });

module.exports= router