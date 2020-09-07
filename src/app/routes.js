module.exports = (app) => {

    app.get('/', function(req, res) {
        res.render('index');
    })

    app.get('/play', function(req, res) {
        res.render('play');
    })

    app.get('/instructions', function(req, res) {
        res.render('instructions');
    })

}