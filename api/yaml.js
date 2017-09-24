var express = require('express');
var fs = require('fs');
var yaml = require('js-yaml');

var router = express.Router();

//TODO: remove this after testing
var backupYamlStr = "## DWARF\n" + "- name: Dwarf\n" + "  description: Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.\n" + "  abilityScoreAdjustment:\n" + "    - name: Constitution\n" + "      description: Your Constitution score increases by 2.\n" + "      attribute: CON\n" + "      modifier: +2\n" + "  age:\n" + "    description: >\n" + "      Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average,\n" + "      they live about 350 years.\n" + "    adultAge: 50\n" + "    avgLifespan: 350\n" + "  alignment: >\n" + "    Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as\n" + "    well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.\n" + "  size:\n" + "    description: Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is medium.\n" + "    minHeight: 48\n" + "    maxHeight: 60\n" + "    avgWeight: 150\n" + "    size: medium\n" + "  speed: 25\n" + "  features:\n" + "    - name: Darkvision\n" + "      description: >\n" + "        Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light\n" + "        within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern\n" + "        color in darkness, only shades of gray.\n" + "      shortDescription: darkvision 60ft\n" + "    - name: Dwarven Resilience\n" + "      description: You have advantage on saving throws against poison, and you have resistance against poison damage.\n" + "      shortDescription: ADV on poison saving throws, resistance to poison\n" + "    - name: Stonecunning\n" + "      description: >\n" + "        Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered\n" + "        proficient in the History skill and add double your proficiency bonus to the check, instead of your normal\n" + "        proficiency bonus.\n" + "      shortDescription: 2x proficiency bonus + ADV on History checks involving origin of stonework\n" + "  proficiencies:\n" + "    - name: Dwarven Combat Training\n" + "      description: You gain proficiency with the battleaxe, handaxe, light hammer, and warhammer.\n" + "      type: weapon\n" + "      items:\n" + "        - battleaxe\n" + "        - handaxe\n" + "        - light hammer\n" + "        - warhammer\n" + "    - name: Tool Proficiency\n" + "      description: >\n" + "        You gain proficiency with the artisan's tool of your choice: smith's tools, brewer's supplies, or mason's tools.\n" + "      type: tool\n" + "      pick1:\n" + "        - smith's tools\n" + "        - brewer's supplies\n" + "        - mason's tools\n" + "  languages:\n" + "    description: >\n" + "      You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and\n" + "      those characteristics spill over into whatever other language a dwarf might speak.\n" + "    items:\n" + "      - Common\n" + "      - Dwarvish\n" + "  subraces:\n" + "    - name: Hill Dwarf\n" + "      description: As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.\n" + "      abilityScoreAdjustment:\n" + "        - name: Wisdom\n" + "          description: Your Wisdom score increases by 1.\n" + "          attribute: WIS\n" + "          modifier: +1\n" + "      features:\n" + "        - name: Dwarven Toughness\n" + "          description: Your hit point maximum increases by 1, and it increases 1 every time you gain a level.\n" + "          stat: hp\n" + "          modifier: +1\n" + "          per: level\n";

//TODO: remove this after testing
/* GET the output for a hard-coded YAML string */
router.get('/', function(req, res, next) {
    try {
        var yamlStr = backupYamlStr;
        var doc = yaml.safeLoad(yamlStr);
        res.json(doc);
    } catch(e) {
        res.status(500).json(e);
    }
});

/* POST a string of YAML and get JSON. */
router.post('/parse', function(req, res, next) {
    try {
        var yamlStr = req.body.yaml;
        if (!_.isString(yamlStr)) {
            res.status(400).send("Must provide 'yaml' in POST body");
            return;
        }
        var doc = yaml.safeLoad(yamlStr);
        res.json(doc);
    } catch(e) {
        res.status(500).json(e);
    }
});

module.exports = router;
