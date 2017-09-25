var AppStateModel = Backbone.Model.extend({
    defaults: {
        backgroundModel: null,
        classModel: null,
        raceModel: null
    },

    getBackgroundModel: function() {
        return this.get(AppStateModel.fields.BACKGROUND_MODEL);
    },

    setBackgroundModel: function(backgroundModel) {
        this.set(AppStateModel.fields.BACKGROUND_MODEL, backgroundModel);
    },

    getClassModel: function() {
        return this.get(AppStateModel.fields.CLASS_MODEL);
    },

    setClassModel: function(classModel) {
        this.set(AppStateModel.fields.CLASS_MODEL, classModel);
    },

    getRaceModel: function() {
        return this.get(AppStateModel.fields.RACE_MODEL);
    },

    setRaceModel: function(raceModel) {
        this.set(AppStateModel.fields.RACE_MODEL, raceModel);
    }
},{
    fields: {
        BACKGROUND_MODEL: 'backgroundModel',
        CLASS_MODEL: 'classModel',
        RACE_MODEL: 'raceModel'
    }
});
var singletonInstance = new AppStateModel();

module.exports = singletonInstance;