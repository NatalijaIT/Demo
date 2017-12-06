var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    images: String
});

var Image =  mongoose.model('created', 
{
Number: Number,
Place: String
});

Image.getImage = (cb) => {
    Image.find(cb);
};

Image.addImage = (row, cb) => {
    Image.create(row, cb);
};

module.exports = Image;
