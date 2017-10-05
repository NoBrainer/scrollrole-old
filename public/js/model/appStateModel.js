var AppStateModel = Backbone.Model.extend({
    defaults: {
        currentCharacterModel: null,
        currentEditClass: null,
        mode: null
    },

    getCurrentCharacterModel: function() {
        return this.get(AppStateModel.fields.CURRENT_CHARACTER_MODEL);
    },

    getCurrentEditClass: function() {
        return this.get(AppStateModel.fields.CURRENT_EDIT_CLASS);
    },

    getMode: function() {
        return this.get(AppStateModel.fields.MODE);
    }
},{
    fields: {
        CURRENT_CHARACTER_MODEL: 'currentCharacterModel',
        CURRENT_EDIT_CLASS: 'currentEditClass',
        MODE: 'mode'
    }
});
var singletonInstance = new AppStateModel();

module.exports = singletonInstance;