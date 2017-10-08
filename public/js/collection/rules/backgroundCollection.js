var BackgroundModel = require('../../model/rules/backgroundModel');

var BackgroundCollection = Backbone.Collection.extend({
    model: BackgroundModel
},{
    parseModel: function(attrs, options) {
        return new BackgroundModel(attrs, options);
    }
});

module.exports = BackgroundCollection;