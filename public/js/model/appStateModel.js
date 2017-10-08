var AppStateModel = Backbone.Model.extend({
    defaults: {
        mode: null,
        rulesConfig: null
    },

    initialize: function(attrs, options) {
        this.initialSetupDeferred = $.Deferred();
    },

    getInitialSetupPromise: function() {
        return this.initialSetupDeferred.promise();
    },

    getMode: function() {
        return this.get(this.fields.MODE);
    },

    setMode: function(mode) {
        this.set(this.fields.MODE, mode);
        return this;
    },

    getRulesConfig: function() {
        return this.get(this.fields.RULES_CONFIG);
    },

    setRulesConfig: function(rulesConfigModel) {
        this.set(this.fields.RULES_CONFIG, rulesConfigModel);
        this.initialSetupDeferred.resolve(rulesConfigModel);
        return this;
    },

    fields: {
        MODE: 'mode',
        RULES_CONFIG: 'rulesConfig'
    },

    modes: {
        BUILDER: 'builder',
        HOME: 'home',
        RULES: 'rules'
    }
});

var singletonInstance = new AppStateModel();
module.exports = singletonInstance;