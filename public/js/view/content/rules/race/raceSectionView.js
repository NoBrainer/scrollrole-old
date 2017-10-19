var AppStateModel = require('../../../../model/appStateModel');
var RaceChooserView = require('./chooser/raceChooserView');
var RaceEditorView = require('./editor/raceEditorView');
var RacePreviewerView = require('./previewer/racePreviewerView');

var RaceSectionView = Backbone.View.extend({
    className: 'section-view race-section-view',

    initialize: function(options) {
        options = options || {};

        this.defaultSectionId = RaceSectionView.sections.CHOOSE;
        this.currentSectionId = options.state || this.defaultSectionId;

        this.defaultRaceModel = null;
        this.currentRaceModel = null;

        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.SECTION +
            ' change:' + AppStateModel.fields.OPTIONS, this.render);
    },

    render: function() {
        this.cleanup();
        this.determineCurrentSection();

        var childOpts = { model: this.currentRaceModel };

        switch(this.currentSectionId) {
            case RaceSectionView.sections.CHOOSE:
                this.childView = new RaceChooserView(childOpts);
                break;
            case RaceSectionView.sections.PREVIEW:
                this.childView = new RacePreviewerView(childOpts);
                break;
            case RaceSectionView.sections.EDIT:
                this.childView = new RaceEditorView(childOpts);
                break;
            default:
                return this.render();
        }
        this.$el.html(this.childView.render().el);

        return this;
    },

    determineCurrentSection: function() {
        this.currentSectionId = AppStateModel.getSection() || this.defaultSectionId;

        var options = AppStateModel.getOptions();
        if (_.isObject(options) && _.isString(options.name)) {
            this.currentRaceModel = this.getRaceModelFromName(options.name);
        } else {
            this.currentRaceModel = null;
        }

        // Make sure we go to the default if we don't have a race model
        if (!this.currentRaceModel && this.currentSectionId != RaceSectionView.sections.CHOOSE) {
            // Pick the default without affecting the URL
            this.currentSectionId = this.defaultSectionId;
            this.currentRaceModel = this.defaultRaceModel;
        }
    },

    getRaceCollection: function() {
        return AppStateModel.getRulesConfig().getRaces();
    },

    getRaceModelFromName: function(name) {
        var collection = this.getRaceCollection();
        if (!collection) return null;
        return collection.getModelByName(name);
    },

    cleanup: function() {
        if (this.childView) {
            this.childView.remove();
            this.childView = null;
        }
    },

    remove: function() {
        this.cleanup();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
},{
    sections: {
        CHOOSE: 'choose',
        EDIT: 'edit',
        PREVIEW: 'preview'
    }
});

module.exports = RaceSectionView;