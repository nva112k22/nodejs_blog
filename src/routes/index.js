const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const accountRouter = require('./account');
const siteRouter = require('./site');

function routes(app) {
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);
  app.use('/accounts', accountRouter);
  app.use('/', siteRouter);
}

module.exports = routes;
