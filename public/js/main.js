var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

// Set the global variables
window.$ = $;
window._ = _;
window.Backbone = Backbone;

// Setup the global config
var Config = require('../../scripts/readConfig');
window.Config = Config;

// Require singletons to make sure they're initialized
require('./router');
require('./model/appStateModel');

var AppView = require('./view/appView');
var LoadingView = require('./view/loading/loadingView');
var PreloadUtil = require('./util/preloadUtil');
var RulesConfigModel = require('./model/rules/rulesConfigModel');
var SvgUtil = require('./util/svgUtil');

(function() {
    var $body = $('body');

    // Render the loading mask
    $body.prepend(LoadingView.render().el);
    LoadingView.show();

    // Preload icons
    PreloadUtil.preloadIcons();

    // Render the app view to the page
    var appView = new AppView();
    $body.prepend(appView.render().$el);

    // Setup the SVGs inline
    SvgUtil.setup();

    // Start the router and hide the loading mask after the setup
    RulesConfigModel.setup()
        .always(function() {
            Backbone.history.start();
            LoadingView.hide();
        });
})();