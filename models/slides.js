var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    image: String
});

var Image = module.exports = mongoose.model('Image', ImageSchema);

module.exports.getImage = (cb) => {
    Image.find(cb);
};

module.exports.addImage = (row, cb) => {
    Image.create(row, cb);
};
