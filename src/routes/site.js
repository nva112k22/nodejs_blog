const express = require('express');
const newsRouter = express.Router();

const siteController = require('../app/controllers/SiteController');
newsRouter.get('/search', siteController.search);
newsRouter.get('/', siteController.index);

module.exports = newsRouter;
