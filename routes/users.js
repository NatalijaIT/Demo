module.exports = function (app) {
    var Images = require('../controllers/controllers');

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.route('/')
        .get(Images.getIndex);
    app.route('/api')
        .get(Images.getIndex);

    app.route('/images')
        .get(Images.getImages)
        .post(Images.addImages);
};
