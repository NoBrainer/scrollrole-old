var AppStateModel = require('../../../../../model/appStateModel');
var ChooserView = require('../../part/chooser/chooserView');

var RaceChooserView = ChooserView.extend({
    className: ChooserView.prototype.className + ' raceChooserView',

    initialize: function(options) {
        options = options || {};

        options.label = 'race';
        options.section = 'races';

        ChooserView.prototype.initialize(options);
    },

    getCollection: function() {
        return AppStateModel.getRulesConfig().getRaces();
    }
});

module.exports = RaceChooserView;