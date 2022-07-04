const Course = require('../models/Course');
const Account = require('../models/Account');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {

    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
        .then(([courses, deletedCount]) => res.render('me/stored-courses', {
          deletedCount,
          courses: mutipleMongooseToObject(courses),
      })
    )
    .catch(next);
  }

  //[GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then(courses => res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(courses)
      }))
      .catch(next);
  }

    //[GET] /me/stored/accounts
  storedAccounts(req, res, next) {

    Promise.all([Account.find({}), Account.countDocumentsDeleted()])
        .then(([accounts, deletedCount]) => res.render('me/stored-accounts', {
          deletedCount,
          accounts: mutipleMongooseToObject(accounts),
      })
    )
    .catch(next);
  }

  //[GET] /me/trash/accounts
  trashAccounts(req, res, next) {
    Account.findDeleted({})
      .then(accounts => res.render('me/trash-accounts', {
          accounts: mutipleMongooseToObject(accounts)
      }))
      .catch(next);
  }
}

module.exports = new MeController();
