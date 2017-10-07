var BackgroundModel = require('../model/backgroundModel');

var BackgroundCollection = Backbone.Collection.extend({
    model: BackgroundModel
});

module.exports = BackgroundCollection;