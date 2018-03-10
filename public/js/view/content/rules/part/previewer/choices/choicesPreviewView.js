var AdjustmentsPreviewView = require('../adjustments/adjustmentsPreviewView');
var ChoiceModel = require('../../../../../../model/rules/parts/choiceModel');
var FeaturesPreviewView = require('../features/featuresPreviewView');
var templates = require('./choicesPreviewView.html');

var ChoicesPreviewView = Backbone.View.extend({
    className: 'choices-preview-view',

    initialize: function(options) {
        options = options || {};

        this.collection = options.collection;
    },

    render: function() {
        var html = templates.scaffold();
        this.$el.html(html);

        this.getCollection().each(_.bind(this.renderChoice, this));

        return this;
    },

    renderChoice: function(choiceModel) {
        //TODO: handle Dragonborn Draconic Ancestry
        switch(choiceModel.getType()) {
            case ChoiceModel.types.ADJUSTMENT:
                this.renderFancyChoice(choiceModel, AdjustmentsPreviewView); break;
            case ChoiceModel.types.FEATURE:
                this.renderFancyChoice(choiceModel, FeaturesPreviewView); break;
            case ChoiceModel.types.PROFICIENCY:
            case ChoiceModel.types.SPELL:
            case ChoiceModel.types.TOOL:
                this.renderBasicChoice(choiceModel); break;
            case ChoiceModel.types.EQUIPMENT:
                this.renderEquipmentChoice(choiceModel); break;
        }
    },

    renderBasicChoice: function(choiceModel) {
        var collection = choiceModel.getOptions();
        if (!collection || _.isEmpty(collection)) return;

        var listString = collection.reduce(function(memo, model) {
            if (!_.isEmpty(memo)) memo += ", ";
            memo += model.getName();
            return memo;
        }, "");
        var html = templates.basicChoiceRow({
            name: choiceModel.getName(),
            type: choiceModel.getType(),
            description: choiceModel.getDescription(),
            pick: choiceModel.getPick(),
            listString: listString
        });
        this.$('.choice-list').append(html);
    },

    renderFancyChoice: function(choiceModel, PreviewViewClass, collection) {
        var $choiceList = this.$('.choice-list');
        var previewView = new PreviewViewClass({
            collection: collection || choiceModel.getOptions(),
            hideTitle: true
        });
        var html = templates.fancyChoiceRow({
            name: choiceModel.getName(),
            type: choiceModel.getType(),
            description: choiceModel.getDescription(),
            pick: choiceModel.getPick()
        });
        $choiceList.append(html);

        if (previewView.isEmpty()) {
            $choiceList.find('.preview-nested-container').html("No options");
        } else {
            $choiceList.find('.preview-nested-container').html(previewView.render().el);
        }
    },

    renderEquipmentChoice: function(choiceModel) {
        var array = choiceModel.getOptions();
        if (!array || _.isEmpty(array)) return;

        var listString = array.reduce(function(memo, item) {
            if (!_.isEmpty(memo)) memo += ", ";
            memo += item;
            return memo;
        }, "");
        var html = templates.basicChoiceRow({
            name: choiceModel.getName(),
            type: choiceModel.getType(),
            description: choiceModel.getDescription(),
            pick: choiceModel.getPick(),
            listString: listString
        });
        this.$('.choice-list').append(html);
    },

    getCollection: function() {
        return this.collection;
    },

    isEmpty: function() {
        return this.getCollection().isEmpty();
    }
});

module.exports = ChoicesPreviewView;