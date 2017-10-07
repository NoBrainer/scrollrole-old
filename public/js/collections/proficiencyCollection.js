var ProficiencyModel = require('../model/proficiencyModel');

var ProficiencyCollection = Backbone.Collection.extend({
    model: ProficiencyModel
});

module.exports = ProficiencyCollection;