var AppStateModel = require('../../../../model/appStateModel');
var ClassChooserView = require('./chooser/classChooserView');
var ClassEditorView = require('./editor/classEditorView');
var ClassPreviewerView = require('./previewer/classPreviewerView');

var ClassSectionView = Backbone.View.extend({
    className: 'section-view class-section-view',

    initialize: function(options) {
        options = options || {};

        this.defaultSectionId = ClassSectionView.sections.CHOOSE;
        this.currentSectionId = options.state || this.defaultSectionId;

        this.defaultClassModel = null;
        this.currentClassModel = null;

        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.SECTION +
            ' change:' + AppStateModel.fields.OPTIONS, this.render);
    },

    render: function() {
        this.cleanup();
        this.determineCurrentSection();

        var childOpts = { model: this.currentClassModel };

        switch(this.currentSectionId) {
            case ClassSectionView.sections.CHOOSE:
                this.childView = new ClassChooserView(childOpts);
                break;
            case ClassSectionView.sections.PREVIEW:
                this.childView = new ClassPreviewerView(childOpts);
                break;
            case ClassSectionView.sections.EDIT:
                this.childView = new ClassEditorView(childOpts);
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
            this.currentClassModel = this.getClassModelFromName(options.name);
        } else {
            this.currentClassModel = null;
        }

        // Make sure we go to the default if we don't have a class model
        if (!this.currentClassModel && this.currentSectionId != ClassSectionView.sections.CHOOSE) {
            // Pick the default without affecting the URL
            this.currentSectionId = this.defaultSectionId;
            this.currentClassModel = this.defaultClassModel;
        }
    },

    getClassCollection: function() {
        return AppStateModel.getRulesConfig().getClasses();
    },

    getClassModelFromName: function(name) {
        var collection = this.getClassCollection();
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

module.exports = ClassSectionView;