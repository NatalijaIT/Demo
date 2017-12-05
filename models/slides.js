var mongoose = require('mongoose');

var SlideSchema = mongoose.Schema({
    image: String
});

var Slide = module.exports = mongoose.model('Slide', slideSchema);

module.exports.getSlide = (cb) => {
    Slide.find(cb);
};

module.exports.addSlide = (row, cb) => {
    Slide.create(row, cb);
};
