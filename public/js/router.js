var AppStateModel = require('./model/appStateModel');

var Router = Backbone.Router.extend({
    initialize: function() {
        this.route(/^.*/, 'goDefault', this.goDefault);
        this.route(/^home.*/, 'goHome', this.goHome);
        this.route(/^builder.*/, 'goBuilder', this.goBuilder);
        this.route(/^rules.*/, 'goRules', this.goRules);
    },

    goBuilder: function() {
        AppStateModel.setMode(AppStateModel.modes.BUILDER);
    },

    goDefault: function() {
        this.navigate('home', { trigger: true, replace: false });
    },

    goHome: function() {
        AppStateModel.setMode(AppStateModel.modes.HOME);
    },

    goRules: function() {
        AppStateModel.setMode(AppStateModel.modes.RULES);
    }
});

var singletonInstance = new Router();
module.exports = singletonInstance;