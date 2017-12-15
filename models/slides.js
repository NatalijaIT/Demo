const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    image: String
});

const Image =  module.exports = mongoose.model('pictures', ImageSchema);

module.exports.getImage = (cb) => {
    Image.find(cb);
};

module.exports.addImage = (row, cb) => {
    Image.create(row, cb);
};
