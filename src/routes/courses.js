const express = require('express');
const newsRouter = express.Router();

const CourseController = require('../app/controllers/CourseController');
newsRouter.get('/create', CourseController.create);
newsRouter.post('/store', CourseController.store);
newsRouter.get('/:id/edit', CourseController.edit);
newsRouter.post('/handle-form-actions', CourseController.handleFormActions);
newsRouter.put('/:id', CourseController.update);
newsRouter.patch('/:id/restore', CourseController.restore);
newsRouter.delete('/:id', CourseController.destroy);
newsRouter.delete('/:id/force', CourseController.forceDestroy);
newsRouter.get('/:slug', CourseController.show);


module.exports = newsRouter;
