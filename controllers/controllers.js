var mongoose = require('mongoose'),
    Image = require('../models/slides');

exports.getIndex = (req, res) => {
    res.send('Please use /images');
};

exports.getImage = (req, res) => {
    Image.getImage((err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
};
    // let newRow = req.body;
    // Images.addImage(newRow, (err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.json({"image" : "//unsplash.it/601/300"});
    // });
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
exports.addImage = (req, res) => {
    let newImage = req.body;
    Image.addImage(newImage, (err, data) => {
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
