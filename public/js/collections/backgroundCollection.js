var BackgroundModel = require('../model/backgroundModel');

var BackgroundCollection = Backbone.Collection.extend({
    model: BackgroundModel
},{
    parseModel: function(attrs, options) {
        return new BackgroundModel(attrs, options);
    }
});

module.exports = BackgroundCollection;