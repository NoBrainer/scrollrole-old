var AppStateModel = require('../model/appStateModel');
var ModelParser = require('./modelParser');
var YamlParser = require('./yamlParser');

var SetupController = {
    setupConfig: function() {
        var deferred = $.Deferred();
        var remaining = 5;

        //TODO: remove this
        deferred.done(function() {
            var rulesConfig = AppStateModel.getRulesConfig();
            console.log(rulesConfig);
        });

        function updateCount() {
            remaining--;
            if (remaining == 0) deferred.resolve();
        }
        setupBackgrounds()
            .done(_.bind(AppStateModel.updateRulesConfig, AppStateModel))
            .always(updateCount);
        setupClasses()
            .done(_.bind(AppStateModel.updateRulesConfig, AppStateModel))
            .always(updateCount);
        setupLists()
            .done(_.bind(AppStateModel.updateRulesConfig, AppStateModel))
            .always(updateCount);
        setupObjects()
            .done(_.bind(AppStateModel.updateRulesConfig, AppStateModel))
            .always(updateCount);
        setupRaces()
            .done(_.bind(AppStateModel.updateRulesConfig, AppStateModel))
            .always(updateCount);

        return deferred.promise();
    }
};

function setupBackgrounds() {
    return loadAndParse('/resources/backgrounds.yaml')
        .then(_.bind(ModelParser.parseBackgrounds, ModelParser));
}

function setupClasses() {
    return loadAndParse('/resources/classes.yaml')
        .then(_.bind(ModelParser.parseClasses, ModelParser));
}

function setupLists() {
    return loadAndParse('/resources/lists.yaml')
        .then(_.bind(ModelParser.parseLists, ModelParser));
}

function setupObjects() {
    return loadAndParse('/resources/objects.yaml');
}

function setupRaces() {
    return loadAndParse('/resources/races.yaml')
        .then(_.bind(ModelParser.parseRaces, ModelParser));
}

function loadAndParse(pathToFile) {
    var deferred = $.Deferred();
    $.get(pathToFile)
        .done(function(text) {
            YamlParser.parseYaml(text).done(deferred.resolve).fail(deferred.reject);
        })
        .fail(function() {
            deferred.reject();
        });
    return deferred.promise();
}

module.exports = SetupController;