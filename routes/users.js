module.exports = function (app) {
    var Slide = require('../controllers/controllers');

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.route('/')
        .get(Slide.getIndex);
    app.route('/api')
        .get(Slide.getIndex);

    app.route('/slides')
        .get(Slide.getSlide)
        .post(Slide.addSlide);
};
