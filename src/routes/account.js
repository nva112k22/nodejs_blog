const express = require('express');
const newsRouter = express.Router();

const AccountController = require('../app/controllers/AccountController');
newsRouter.get('/create', AccountController.create);
newsRouter.post('/store', AccountController.store);
newsRouter.get('/:id/edit', AccountController.edit);
newsRouter.post('/handle-form-actions', AccountController.handleFormActions);
newsRouter.put('/:id', AccountController.update);
newsRouter.patch('/:id/restore', AccountController.restore);
newsRouter.delete('/:id', AccountController.destroy);
newsRouter.delete('/:id/force', AccountController.forceDestroy);
newsRouter.get('/:slug', AccountController.show);


module.exports = newsRouter;
