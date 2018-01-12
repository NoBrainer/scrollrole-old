var ExportedClass = module.exports = Backbone.Model.extend();

var AppStateModel = require('./model/appStateModel');

var Router = Backbone.Router.extend({
    initialize: function() {
        this.route(/^.*/, 'goDefault', this.goDefault);

        this.route('home(/)(?:params)', 'goHome', this.goHome);
        this.route('home/:tab(/)(?:params)', 'goHome', this.goHome);
        this.route('home/:tab/:section(/)(?:params)', 'goHome', this.goHome);

        this.route('builder(/)(?:params)', 'goBuilder', this.goBuilder);
        this.route('builder/:tab(/)(?:params)', 'goBuilder', this.goBuilder);
        this.route('builder/:tab/:section(/)(?:params)', 'goBuilder', this.goBuilder);

        this.route('rules(/)(?:params)', 'goRules', this.goRules);
        this.route('rules/:tab(/)(?:params)', 'goRules', this.goRules);
        this.route('rules/:tab/:section(/)(?:params)', 'goRules', this.goRules);
    },

    goBuilder: function(tab, section, params) {
        var options = this.parsePathParams(params);
        AppStateModel.setPage(AppStateModel.modes.BUILDER, tab, section, options);
    },

    goDefault: function() {
        this.navigate(AppStateModel.modes.HOME, { trigger: true, replace: false });
    },

    goHome: function(tab, section, params) {
        AppStateModel.setPage(AppStateModel.modes.HOME);
    },

    goRules: function(tab, section, params) {
        var options = this.parsePathParams(params);
        AppStateModel.setPage(AppStateModel.modes.RULES, tab, section, options);
    },

    parsePathParams: function(params) {
        if (!_.isString(params) || _.isEmpty(params)) return null;
        var pairs = params.split('&');
        var obj = {};
        _.each(pairs, function(pair) {
            var split = pair.split('=');
            obj[split[0]] = split[1] || null;
        });
        return obj;
    }
});

var singletonInstance = new Router();
_.extend(ExportedClass, singletonInstance);
ExportedClass.prototype = Router.prototype;