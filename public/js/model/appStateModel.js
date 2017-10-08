var AppStateModel = Backbone.Model.extend({
    defaults: {
        currentCharacterModel: null,
        currentEditClass: null,
        mode: null,
        rulesConfig: null
    },

    initialize: function(attrs, options) {
        this.initialSetupDeferred = $.Deferred();
    },

    getCurrentCharacterModel: function() {
        return this.get(AppStateModel.fields.CURRENT_CHARACTER_MODEL);
    },

    getCurrentEditClass: function() {
        return this.get(AppStateModel.fields.CURRENT_EDIT_CLASS);
    },

    getInitialSetupPromise: function() {
        return this.initialSetupDeferred.promise();
    },

    getMode: function() {
        return this.get(AppStateModel.fields.MODE);
    },

    getRulesConfig: function() {
        return this.get(AppStateModel.fields.RULES_CONFIG);
    },

    setRulesConfig: function(rulesConfigModel) {
        this.set(AppStateModel.fields.RULES_CONFIG, rulesConfigModel);
        this.initialSetupDeferred.resolve(rulesConfigModel);
        return this;
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