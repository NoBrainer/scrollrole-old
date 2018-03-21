var AppStateModel = require('../../../../../model/appStateModel');
var ChooserView = require('../../part/chooser/chooserView');

var BackgroundChooserView = ChooserView.extend({
    className: ChooserView.prototype.className + ' backgroundChooserView',

    initialize: function(options) {
        options = options || {};

        options.label = 'background';
        options.section = 'backgrounds';
        options.pathToIcons = '/resources/icons/background/';

        ChooserView.prototype.initialize(options);
    },

    getCollection: function() {
        return AppStateModel.getRulesConfig().getBackgrounds();
    }
});

module.exports = BackgroundChooserView;