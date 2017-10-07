var ChoiceModel = require('../model/choiceModel');

var ChoiceCollection = Backbone.Collection.extend({
    model: ChoiceModel
});

module.exports = ChoiceCollection;