const express = require('express');
const mongoose = require('mongoose');
const Visitor = require('../models/VisitorSchema');
const routes = express.Router() ;

routes.get('/', async (req, res) => {
    try {
        const result = await Visitor.find({});
        if(result) {
            console.log(result)
            res.json(result)
        }
        else{
            console.log('No Result')
        }
    } catch (error) {
        console.log(err)
    }
})

routes.post('/add', async(req, res) => {
    try {
        let visitorname = req.body.visitorname;
        let gender = req.body.gender;
        let mobile = req.body.mobile;
        let wing = req.body.wing;
        let flat = req.body.flat;
        let flatowner = req.body.flatowner;
        let date = req.body.date;
        let time = req.body.time;
        let visitoraddress = req.body.visitoraddress;
        let purpose = req.body.purpose;
        const newVisitor = new Visitor({
            visitorname:visitorname,
            gender:gender,
            mobile:mobile,
            wing:wing,
            flat:flat,
            flatowner:flatowner,
            date:date,
            time:time,
            visitoraddress:visitoraddress,
            purpose:purpose
        })
        const result = await newVisitor.save();
        if(result){
            console.log(result);
            res.json(result);
        }
        else{
            console.log('Somethings Went wrong')
        }
    } catch (error) {
        console.log(error)
    }
} )

routes.post('/edit/:id', async (req, res) => {
    try {
        let visitorname = req.body.visitorname;
        let gender = req.body.gender;
        let mobile = req.body.mobile;
        let wing = req.body.wing;
        let flat = req.body.flat;
        let flatowner = req.body.flatowner;
        let date = req.body.date;
        let time = req.body.time;
        let visitoraddress = req.body.visitoraddress;
        let purpose = req.body.purpose;
        const result = await Visitor.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $set:{
                    visitorname:visitorname,
                    gender:gender,
                    mobile:mobile,
                    wing:wing,
                    flat:flat,
                    flatowner:flatowner,
                    date:date,
                    time:time,
                    visitoraddress:visitoraddress,
                    purpose:purpose
                }
            }
        )
        if(result){
            console.log(result);
            res.json(result);
        }
        else{
            console.log('Somethings Went Wrong')
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = routes;