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
    'resources/icons/ability/charisma.png',
    'resources/icons/ability/constitution.png',
    'resources/icons/ability/dexterity.png',
    'resources/icons/ability/intelligence.png',
    'resources/icons/ability/strength.png',
    'resources/icons/ability/wisdom.png',
    'resources/icons/background/acolyte.png',
    'resources/icons/background/custom.png',
    'resources/icons/class/barbarian.png',
    'resources/icons/class/bard.png',
    'resources/icons/class/cleric.png',
    'resources/icons/class/custom.png',
    'resources/icons/class/druid.png',
    'resources/icons/class/fighter.png',
    'resources/icons/class/monk.png',
    'resources/icons/class/paladin.png',
    'resources/icons/class/ranger.png',
    'resources/icons/class/rogue.png',
    'resources/icons/class/sorcerer.png',
    'resources/icons/class/warlock.png',
    'resources/icons/class/wizard.png',
    'resources/icons/miscellaneous/d20.png',
    'resources/icons/miscellaneous/homebrew.png',
    'resources/icons/race/custom.png',
    'resources/icons/race/dragonborn.png',
    'resources/icons/race/dwarf.png',
    'resources/icons/race/elf.png',
    'resources/icons/race/gnome.png',
    'resources/icons/race/half-elf.png',
    'resources/icons/race/half-orc.png',
    'resources/icons/race/halfling.png',
    'resources/icons/race/human.png',
    'resources/icons/race/tiefling.png',
    'resources/icons/skill/acrobatics.png',
    'resources/icons/skill/animal-handling.png',
    'resources/icons/skill/arcana.png',
    'resources/icons/skill/athletics.png',
    'resources/icons/skill/deception.png',
    'resources/icons/skill/history.png',
    'resources/icons/skill/insight.png',
    'resources/icons/skill/intimidation.png',
    'resources/icons/skill/investigation.png',
    'resources/icons/skill/medicine.png',
    'resources/icons/skill/nature.png',
    'resources/icons/skill/perception.png',
    'resources/icons/skill/performance.png',
    'resources/icons/skill/persuasion.png',
    'resources/icons/skill/religion.png',
    'resources/icons/skill/sleight-of-hand.png',
    'resources/icons/skill/stealth.png',
    'resources/icons/skill/survival.png'
];

_.extend(ExportedClass, PreloadUtil);