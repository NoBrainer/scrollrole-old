var ExportedClass = module.exports = Backbone.Model.extend();

var LanguageModel = Backbone.Model.extend({
    defaults: {
        isExotic: false,    //Boolean
        name: null,         //String
        script: null,       //String
        typicalSpeakers: [] //List of Strings
    },

    isExotic: function() {
        return this.get(LanguageModel.fields.IS_EXOTIC);
    },

    getName: function() {
        return this.get(LanguageModel.fields.NAME);
    },

    getScript: function() {
        return this.get(LanguageModel.fields.SCRIPT);
    },

    getTypicalSpeakers: function() {
        return this.get(LanguageModel.fields.TYPICAL_SPEAKERS);
    }
},{
    fields: {
        IS_EXOTIC: 'isExotic',
        NAME: 'name',
        SCRIPT: 'script',
        TYPICAL_SPEAKERS: 'typicalSpeakers'
    }
});

_.extend(ExportedClass, LanguageModel);
ExportedClass.prototype = LanguageModel.prototype;