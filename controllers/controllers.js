
var mongoose = require('mongoose'),
    Images = require('../models/slides');

exports.getIndex = (req, res) => {
    console.log('I in getIndex function');
    res.send('Please use ????/images');
};

exports.getImage = (req, res) => {
    Images.getImage((err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
};

exports.addImage = (req, res) => {
    res.send('addImage');
    let newRow = req.body;
    Slide.addImage(newRow, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
};
