const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    image: String
});

const Image =  module.exports = mongoose.model('pictures', imageSchema);

module.exports.getImage = (cb) => {
    Image.find(cb);
};

module.exports.addImage = (row, cb) => {
    Image.create(row, cb);
};
