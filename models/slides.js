var mongoose = require('mongoose');

var ImagesSchema = mongoose.Schema({
    image: String
});

var Images = module.exports = mongoose.model('Images', ImagesSchema);

module.exports.getImages = (cb) => {
    Images.find(cb);
};

module.exports.addImages = (row, cb) => {
    Images.create(row, cb);
};
