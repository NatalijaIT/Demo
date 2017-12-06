var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    image: String
});

var Image =  mongoose.model('Image', ImageSchema);

Image.getImage = (cb) => {
    res.send('sPlease use ????/images');
    //Image.find(cb);
};

Image.addImage = (row, cb) => {
    Image.create(row, cb);
};

module.exports = Image;
