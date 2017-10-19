var ExportedClass = module.exports = Backbone.Model.extend();

var AdjustmentModel = Backbone.Model.extend({
    defaults: {
        ability: null,  //String
        modifier: null  //Number
    },

    getAbility: function() {
        return this.get(AdjustmentModel.fields.ABILITY);
    },

    getModifier: function() {
        return this.get(AdjustmentModel.fields.MODIFIER);
    }
},{
    fields: {
        ABILITY: 'ability',
        MODIFIER: 'modifier'
    }
});

_.extend(ExportedClass, AdjustmentModel);
ExportedClass.prototype = AdjustmentModel.prototype;