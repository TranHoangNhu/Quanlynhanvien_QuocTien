const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/home', siteRouter);
    app.use('/', siteRouter);

    app.get('/search', (req, res) => {
        res.render('search');
    });

    app.post('/search', (req, res) => {
        res.send('');
    });
}

module.exports = route;