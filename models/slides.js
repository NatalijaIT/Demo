var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    image: String
});

var Image = mongoose.model('Image', ImageSchema);

Image.getImage = (cb) => {
    console.log('module.export c');
    res.send('module.export s');
    Image.find(cb);
};

Image.addImage = (row, cb) => {
    Image.create(row, cb);
};

module.exports = Image;
