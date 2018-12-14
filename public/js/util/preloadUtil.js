var ExportedClass = module.exports = {};

function preload(files) {
    files = _.isArray(files) ? files : [files];

    _.each(files, function(file) {
        if (file && _.isString(file)) $.get(file);
    });
}

var PreloadUtil = {
    preloadIcons: function() {
        preload(ICON_FILES);
    }
};

var ICON_FILES = [
    'resources/icons/icons.svg',
    'resources/icons/miscellaneous/d20.png',
    'resources/icons/miscellaneous/homebrew.png'
];

_.extend(ExportedClass, PreloadUtil);