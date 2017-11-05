var AppStateModel = require('../../../../../model/appStateModel');
var ChooserView = require('../../part/chooser/chooserView');

var RaceChooserView = ChooserView.extend({
    className: ChooserView.prototype.className + ' race-chooser-view',

    initialize: function(options) {
        options = options || {};

        options.label = 'race';
        options.section = 'races';
        options.pathToIcons = '/resources/icons/race/';

        ChooserView.prototype.initialize(options);
    },

    getCollection: function() {
        return AppStateModel.getRulesConfig().getRaces();
    }
});

module.exports = RaceChooserView;