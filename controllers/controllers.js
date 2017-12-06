
var mongoose = require('mongoose'),
    Image = require('../models/slides');

exports.getIndex = (req, res) => {
    console.log('I in getIndex function');
    res.send('Please use ????/images');
};

exports.getImage = (req, res) => {
    res.send('getImage');
    // Images.getImage((err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.json(data);
    // });
};

exports.addImage = (req, res) => {
    res.send('addImage');
    // let newRow = req.body;
    // Slide.addImage(newRow, (err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     res.json(data);
    // });
};
