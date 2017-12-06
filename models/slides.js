var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    address: String
});

var Image =  mongoose.model('testImages', ImageSchema);

Image.getImage = (err, data) => {
        res.send(data);
// (cb) => {
//     Image.find(cb);
};

Image.addImage = (row, cb) => {
    Image.create(row, cb);
};

module.exports = Image;
