const express = require('express');
const newsRouter = express.Router();

const meController = require('../app/controllers/MeController');
newsRouter.get('/stored/courses', meController.storedCourses);
newsRouter.get('/trash/courses', meController.trashCourses);
newsRouter.get('/stored/accounts', meController.storedAccounts);
newsRouter.get('/trash/accounts', meController.trashAccounts);


module.exports = newsRouter;
