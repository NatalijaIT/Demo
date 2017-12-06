var mongoose = require('mongoose');

var ImageSchema = mongoose.Schema({
    images: any
});

var Images = mongoose.model('Images', ImageSchema);

Images.getImage = (cb) => {
    //console.log('module.export c');
    res.send('module.export s');
    //Image.find(cb);
};

Images.addImage = (row, cb) => {
    Images.create(row, cb);
};

module.exports = Images;
