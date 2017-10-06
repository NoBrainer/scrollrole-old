var AppStateModel = Backbone.Model.extend({
    defaults: {
        currentCharacterModel: null,
        currentEditClass: null,
        mode: null,
        rulesConfig: {
            backgrounds: null,
            classes: null,
            lists: null,
            objects: null,
            races: null
        }
    },

    getCurrentCharacterModel: function() {
        return this.get(AppStateModel.fields.CURRENT_CHARACTER_MODEL);
    },

    getCurrentEditClass: function() {
        return this.get(AppStateModel.fields.CURRENT_EDIT_CLASS);
    },

    getMode: function() {
        return this.get(AppStateModel.fields.MODE);
    },

    getRulesConfig: function() {
        return this.get(AppStateModel.fields.RULES_CONFIG);
    },

    updateRulesConfig: function(configObj) {
        var config = _.extend({}, this.getRulesConfig(), configObj);
        this.set(AppStateModel.fields.RULES_CONFIG, config);
    }
},{
    fields: {
        CURRENT_CHARACTER_MODEL: 'currentCharacterModel',
        CURRENT_EDIT_CLASS: 'currentEditClass',
        MODE: 'mode',
        RULES_CONFIG: 'rulesConfig'
    }
});
var singletonInstance = new AppStateModel();

module.exports = singletonInstance;