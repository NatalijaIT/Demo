
var mongoose = require('mongoose'),
    Images = require('../models/slides');

exports.getIndex = (req, res) => {
    res.send('Please use /slides');
};

exports.getImages = (req, res) => {
    Images.getImages((err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
};

exports.addImages = (req, res) => {
    let newRow = req.body;
    Slide.addImages(newRow, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
};
