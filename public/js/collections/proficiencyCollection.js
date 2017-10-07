var ProficiencyModel = require('../model/proficiencyModel');

var ProficiencyCollection = Backbone.Collection.extend({
    model: ProficiencyModel
},{
    parseModel: function(attrs, options) {
        return new ProficiencyModel(attrs, options);
    }
});

module.exports = ProficiencyCollection;