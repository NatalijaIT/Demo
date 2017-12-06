var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    images: []
});

var Image =  mongoose.model('image', ImageSchema);

Image.getImage = (cb) => {
    Image.find(cb);
};

Image.addImage = (row, cb) => {
    Image.create(row, cb);
};

module.exports = Image;
