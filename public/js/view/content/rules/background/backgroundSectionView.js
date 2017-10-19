var AppStateModel = require('../../../../model/appStateModel');
var BackgroundChooserView = require('./chooser/backgroundChooserView');
var BackgroundEditorView = require('./editor/backgroundEditorView');
var BackgroundPreviewerView = require('./previewer/backgroundPreviewerView');

var BackgroundSectionView = Backbone.View.extend({
    className: 'section-view background-section-view',

    initialize: function(options) {
        options = options || {};

        this.defaultSectionId = BackgroundSectionView.sections.CHOOSE;
        this.currentSectionId = options.state || this.defaultSectionId;

        this.defaultBackgroundModel = null;
        this.currentBackgroundModel = null;

        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.SECTION +
                ' change:' + AppStateModel.fields.OPTIONS, this.render);
    },

    render: function() {
        this.cleanup();
        this.determineCurrentSection();

        var childOpts = { model: this.currentBackgroundModel };

        switch(this.currentSectionId) {
            case BackgroundSectionView.sections.CHOOSE:
                this.childView = new BackgroundChooserView(childOpts);
                break;
            case BackgroundSectionView.sections.PREVIEW:
                this.childView = new BackgroundPreviewerView(childOpts);
                break;
            case BackgroundSectionView.sections.EDIT:
                this.childView = new BackgroundEditorView(childOpts);
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
            this.currentBackgroundModel = this.getBackgroundModelFromName(options.name);
        } else {
            this.currentBackgroundModel = null;
        }

        // Make sure we go to the default if we don't have a background model
        if (!this.currentBackgroundModel && this.currentSectionId != BackgroundSectionView.sections.CHOOSE) {
            // Pick the default without affecting the URL
            this.currentSectionId = this.defaultSectionId;
            this.currentBackgroundModel = this.defaultBackgroundModel;
        }
    },

    getBackgroundCollection: function() {
        return AppStateModel.getRulesConfig().getBackgrounds();
    },

    getBackgroundModelFromName: function(name) {
        var collection = this.getBackgroundCollection();
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

module.exports = BackgroundSectionView;