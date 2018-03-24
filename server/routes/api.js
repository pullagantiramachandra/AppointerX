const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/user');

const db = 'mongodb://ram:ram123@ds163418.mlab.com:63418/appointment';
mongoose.Promise = global.Promise;
mongoose.connect(db, (err) =>{
    if(err){
        console.log('error! '+ error);
        
    }
});
router.get('/users', (req,res) => {
    console.log(res);
    user.find({}).
    exec((err, users)=>{
        if(err){
            console.log("error");
            
        }else {
            res.json(users);
        }
    })
});
router.get('/user/:id', (req,res) => {
    console.log(res);
    user.findById(req.params.id).
    exec((err, user)=>{
        if(err){
            console.log("error");
            
        }else {
            res.json(user);
        }
    })
});

router.delete('/user/:id', (req,res) => {
    console.log(res);
    user.findByIdAndRemove(req.params.id, (err, deletuser) => {
        if(err){
            console.log("error");
            
        }else {
            res.json(deletuser);
        }
    });
});

router.put('/user/:id', (req,res) => {
    console.log(res);
    user.findByIdAndUpdate(req.params.id,
        {
        $set: {

                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                npi:req.body.npi,
                location:req.body.location,
                add1:req.body.add1,
                add2:req.body.add2,
                city:req.body.city,
                pincode:req.body.pincode,
                state:req.body.state,
                coutry:req.body.coutry
         
        }
    },
    {
        new:true
    },
    (err, updateuser) => {
        if(err) {
            console.log(err);
        }else {
            res.json(updateuser);
        }
    }
);

});

router.post('/user', (req,res) => {
    console.log(res);
    let newuser = new user();
            newuser.firstName=req.body.firstName,
            newuser.lastName= req.body.lastName,
            newuser.email= req.body.email,
            newuser.password= req.body.password,
            newuser.role= req.body.role,
            newuser.npi=req.body.npi,
            newuser.location=req.body.location,
            newuser.add1=req.body.add1,
            newuser.add2=req.body.add2,
            newuser.city=req.body.city,
            newuser.pincode=req.body.pincode,
            newuser.state=req.body.state,
            newuser.coutry=req.body.coutry
    newuser.save((err, nsertuser) =>{
        if(err){
            console.log(err);
        }else {
            res.json(nsertuser);
        }
    })
});

module.exports = router;