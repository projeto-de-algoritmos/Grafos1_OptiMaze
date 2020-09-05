module.exports = (app) => {

    app.get('/', function(req, res) {
        res.sendFile('./views/HomePage/index.html', { root: __dirname });
    })
    
}