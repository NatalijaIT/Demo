var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    images: []
});

var Image =  mongoose.model('Image', ImageSchema);

Image.getImage = (cb) => {
    Image.find(cb);
};

Image.addImage = (row, cb) => {
    Image.create(row, cb);
};

module.exports = Image;
