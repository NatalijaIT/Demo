
var mongoose = require('mongoose'),
    Slide = require('../models/slides');

exports.getIndex = (req, res) => {
    res.send('Please use /slides');
};

exports.getSlide = (req, res) => {
    Slide.getSlide((err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
};

exports.addSlide = (req, res) => {
    let newRow = req.body;
    Slide.addSlide(newRow, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
};
