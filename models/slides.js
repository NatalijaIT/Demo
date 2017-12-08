var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    image: String
});

var Image =  mongoose.model('created', ImageSchema);

Image.getImage = (cb) => {
    Image.find(cb);
};

Image.addImage = (row, cb) => {
    Image.create(row, cb);
};

module.exports = Image;
