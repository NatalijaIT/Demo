var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    image: string
});

var Images = mongoose.model('Image', ImageSchema);

Images.getImage = (cb) => {
    //console.log('module.export c');
    res.send('module.export s');
    //Image.find(cb);
};

Images.addImage = (row, cb) => {
    Images.create(row, cb);
};

module.exports = Images;
