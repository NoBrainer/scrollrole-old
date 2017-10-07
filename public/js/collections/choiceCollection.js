var ChoiceModel = require('../model/choiceModel');

var ChoiceCollection = Backbone.Collection.extend({
    model: ChoiceModel
},{
    parseModel: function(attrs, options) {
        return new ChoiceModel(attrs, options);
    }
});

module.exports = ChoiceCollection;