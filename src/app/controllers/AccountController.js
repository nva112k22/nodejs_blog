const Account = require('../models/Account');
const {mongooseToObject} = require('../../util/mongoose');

class AccountController {

  //GET /accounts/:slug
  show(req, res, next) {
    Account.findOne({slug: req.params.slug})
        .then(account => {
          res.render('accounts/show', { account: mongooseToObject(account) });
        })
        .catch(next);
  }

  //[GET] /accounts/create
  create(req, res, next) {
          res.render('accounts/create');
  }

  //[POST] /accounts/store
  store(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`;
    const account = new Account(req.body);
    account.save()
    .then(() => res.redirect('/me/stored/accounts'))
    .catch(error => {});
  }
  //[GET] /accounts/:id/edit
  edit(req, res, next) {
    Account.findById(req.params.id)
    .then(account => res.render('accounts/edit', {
      account: mongooseToObject(account)
    }))
    .catch(next);
}

  //[PUT] /accounts/:id/update
  update(req, res, next) {
    Account.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/accounts'))
        .catch(next);
}
  //[DELETE] /accounts/:id/destroy
    destroy(req, res, next) {
      Account.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
      }
      
      //[DELETE] /accounts/:id/force
      forceDestroy(req, res, next) {
        Account.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
    //[PATCH] /accounts/:id/restore
    restore(req, res, next) {
      Account.restore({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[POST] /accounts/handle-form-actions
  handleFormActions(req, res, next) {
    switch(req.body.action) {
      case 'delete':
        Account.delete({_id: {$in: req.body.accountIds}})
        .then(() => res.redirect('back'))
        .catch(next);
        break;
        default:
          res.json({message: 'Action is invalid!'});
    }
}

}

module.exports = new AccountController();
