
var mongoose = require('mongoose'),
    Images = require('../models/slides');

exports.getIndex = (req, res) => {
    console.log('I in getIndex function');
    res.send('Please use /images');
};

exports.getImage = (req, res) => {
    let newRow = req.body;
    var record = new Images({Number: 105, Place: "pathz"});
    record.addImage(newRow, (err, data) => {
        if (err) {
            throw err;
        }
        res.json({Number: 105, Place: "pathz"});
    });
    // var record = new Images({Number: 105, Place: "pathz"});
    // record.addImage(function(err){
    //     if(err)
    //     {
    //         res.status(500).json({status: 'failure'});
    //     }
    //     else 
    //     {
    //         res.json({status: 'success'});
    //     }
    // });
    // Images.getImage((err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.json(data);
    // });
};

exports.addImage = (req, res) => {
    var record = new Images({Number: 105, Place: "pathz"});
    record.addImage((err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
    // let newRow = req.body;
    // Slide.addImage(newRow, (err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.json(data);
    // });
};
