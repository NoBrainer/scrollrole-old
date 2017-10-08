var ProficiencyModel = require('../../../model/rules/parts/proficiencyModel');

var ProficiencyCollection = Backbone.Collection.extend({
    model: ProficiencyModel
},{
    parseModel: function(attrs, options) {
        return new ProficiencyModel(attrs, options);
    }
});

module.exports = ProficiencyCollection;