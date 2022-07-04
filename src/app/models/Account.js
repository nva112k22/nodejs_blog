const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Account = new Schema({
    name: {type:String, required: true,},
    email: {type:String, maxLength: 600},
    password: {type:String, maxLength: 255},
    address: {type: String, required: true,},
    role: {type: String, maxlength: 255},
    slug: {type: String, slug: 'name', unique: true},
}, {
    timestamps: true,
});
//Add plugins
mongoose.plugin(slug);
Account.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all',
 });

module.exports = mongoose.model('Account', Account);