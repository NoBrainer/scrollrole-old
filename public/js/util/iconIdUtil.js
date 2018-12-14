var ExportedClass = module.exports = {};

var abilities = ['charisma', 'constitution', 'dexterity', 'intelligence', 'strength', 'wisdom'];
var backgrounds = ['acolyte', 'custom'];
var classes = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer',
    'warlock', 'wizard'];
var races = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling'];
var skills = ['acrobatics', 'animal-handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation',
    'investigation', 'medicine', 'nature', 'perception', 'religion', 'sleight-of-hand', 'stealth', 'survival'];

function prepend(arr, pre) {
    return _.map(arr, function(str) {
        return pre + '-' + str;
    });
}

var validIconIds = _.union(prepend(abilities, 'ability'), prepend(backgrounds, 'background'),
    prepend(classes, 'class'), prepend(races, 'race'), prepend(skills, 'skill'));

var IconIdUtil = {
    normalize: function(startValue, defaultValue) {
        if (_.contains(validIconIds, startValue)) {
            return startValue;
        }

        var normalizedName = _.isString(startValue) ? startValue.toLowerCase() : startValue;
        return _.contains(validIconIds, normalizedName) ? normalizedName : defaultValue;
    }
};

_.extend(ExportedClass, IconIdUtil);