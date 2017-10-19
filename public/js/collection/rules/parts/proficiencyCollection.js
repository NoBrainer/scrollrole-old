var ExportedClass = module.exports = Backbone.Collection.extend();

var ProficiencyModel = require('../../../model/rules/parts/proficiencyModel');

var ProficiencyCollection = Backbone.Collection.extend({
    model: ProficiencyModel,

    getModelsByType: function(type) {
        return this.reduce(function(memo, model) {
            if (model.getType() === type) {
                memo.push(model);
            }
            return memo;
        }, []);
    },

    getArmor: function() {
        return this.getModelsByType(ProficiencyModel.types.ARMOR);
    },

    getLanguages: function() {
        return this.getModelsByType(ProficiencyModel.types.LANGUAGE);
    },

    getSavingThrows: function() {
        return this.getModelsByType(ProficiencyModel.types.SAVING_THROW);
    },

    getSkills: function() {
        return this.getModelsByType(ProficiencyModel.types.SKILL);
    },

    getTools: function() {
        return this.getModelsByType(ProficiencyModel.types.TOOL);
    },

    getWeapons: function() {
        return this.getModelsByType(ProficiencyModel.types.WEAPON);
    }
});

_.extend(ExportedClass, ProficiencyCollection);
ExportedClass.prototype = ProficiencyCollection.prototype;