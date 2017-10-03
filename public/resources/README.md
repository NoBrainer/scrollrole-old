# Configuration

The configuration is a YAML file. (Check out [YAML Version 1.2](http://www.yaml.org/spec/1.2/spec.html) for details on
the YAML specifications.)

## TERMINOLOGY

The YAML documentation refers to a list of things as a `collection.` Instead, I will call each of these a `list`.

Example:
```yaml
# Here is a list of items:
- item
- item
```

The documentation also refers to each key-value pair as a `mapping`. I will call each of these an `attribute`, a
`mapping`, or an `object`, depending on the context.

Example:
```yaml
# Here is the name attribute:
name: Uncle Rufus
 
# The proficiencies attribute is a list of objects. Each object has the 'type' attribute.
proficiencies:
  - { type: skill, name: Insight }
  - { type: skill, name: Religion }
```


## OVERVIEW

The configuration file includes all backgrounds, classes, and races.

```yaml
backgrounds:
classes:
races:
```


## BACKGROUNDS ##

The `backgrounds` mapping contains a list of background definitions.

```yaml
backgrounds:
  - name:
    description:
    proficiencies:
    equipment:
    features:
    choices:
    suggestedCharacteristics:
      personalityTraits:
      ideals:
      bonds:
      flaws:
```

- `name`: (REQUIRED) String for the background name.
- `description`: List of paragraph Strings for the background description.
- `proficiencies`: List of armor, weapon, tool, language, and skill proficiencies. (See: "Proficiency Object" in
"GENERAL OBJECTS")
- `equipment`: List of starting equipment. Each piece of equipment is a String.
- `features`: List of background features. (See: "Feature Object" in "GENERAL OBJECTS")
- `choices`: List of background choices to be made at character creation. (See: "Choice Object" in "GENERAL OBJECTS")
- `suggestedCharacteristics`: Suggested `personalityTraits`, `ideals`, `flaws`, and `bonds` for the background.
  - `personalityTraits`
  - `ideals`
  - `bonds`
  - `flaws`


## CLASSES ##

The `classes` mapping contains a list of class definitions.

```yaml
classes:
  - name:
    description:
    hitDice:
    baseHitPoints:
    proficiencies:
    proficiencyBonus:
    equipment:
    features:
    spellList:
    spellCasting:
    choices:
    unlockables:
    featureDescriptions:
```

- `name`: (REQUIRED) String for the class name.
- `description`: List of paragraph Strings for the class description.
- `hitDice`: (REQUIRED) String for the hit dice. (1d6, 1d8, etc.)
- `baseHitPoints`: (REQUIRED) Number for the base hit points for a level one character (before any modifiers).
- `proficiencies`: List of armor, weapon, tool, language, and skill proficiencies. (See: "Proficiency Object" in
"GENERAL OBJECTS")
- `proficiencyBonus`: (REQUIRED) Number for the proficiency bonus.
- `equipment`: List of starting equipment. Each piece of equipment is a String.
- `features`: List of class features. (See: "Feature Object" in "GENERAL OBJECTS")
- `spellList`: List of spells. (See: "Spell Object" in "GENERAL OBJECTS")
- `spellCasting`: Object defining how spellcasting works. (See: "Spellcasting Object" in "GENERAL OBJECTS")
- `choices`: List of class choices to be made at character creation. (See: "Choice Object" in "GENERAL OBJECTS")
- `unlockables`: (REQUIRED) List of unlockable for later levels in the class. (See: "Unlockable Object" in "GENERAL
OBJECTS")
- `featureDescriptions`: List of feature descriptions (another place to put feature descriptions; useful for unlockables
and choices)


## RACES ##

The `races` mapping contains a list of class definitions.

```yaml
races:
  - name:
    description:
    abilityScoreAdjustments:
    age:
    alignment:
    size:
    speed:
    features:
    proficiencies:
    choices:
    subraces:
```

- `name`: (REQUIRED) String for the race name.
- `description`: List of paragraph Strings for the race description.
- `abilityScoreAdjustments`: List of ability score adjustments. (See: "Ability Score Adjustment Object" in "GENERAL
OBJECTS")
- `age`: String for the race's age description.
- `alignment`: String for the race's typical alignment description.
- `size`: String for the race's size description.
- `speed`: Number for the movement speed in feet.
- `features`: List of race features. (See: "Feature Object" in "GENERAL OBJECTS")
- `proficiencies`: List of armor, weapon, tool, language, and skill proficiencies. (See: "Proficiency Object" in
"GENERAL OBJECTS")
- `choices`: List of race choices to be made at character creation. (See: "Choice Object" in "GENERAL OBJECTS")
- `subraces`: List of possible subraces. Each subrace is a Race object but with less options.


## GENERAL OBJECTS ##

### Overview on Objects
Whenever two Lists are applicable, the Lists are combined. For instance, if a sub-race provided your character with a
list of features, those features are added to your other List of features.

All Lists default to an empty List if they are not required.

### Ability Score Adjustment Object
Each Ability Score Adjustment Object represents an ability score modifiers from the base value.

- `name`: (REQUIRED) String for the ability name
- `attribute`: (REQUIRED) String abbreviation for the ability
- `modifier`: (REQUIRED) Number for the modifier

Example:
```yaml
abilityScoreAdjustments:
  - { attribute: CON, modifier: +2, name: Constitution }
  ...
```

### Choice Object
Each Choice Object represent a decision the player needs to make.

- `name`: String
- `description`: List of paragraph Strings
- `type`: (REQUIRED) String for the type of thing being picked (`abilityScoreAdjustment` | `equipment` | `feature` |
`proficiency`)
- `pick`: (REQUIRED) Number of things to be picked
- `options`: Object or String of things to pick from. If it's an Object, it can be an Ability Score Adjustment Object,
Feature Object, or Proficiency Object. (Must have this or `from`.)
- `from`: String of a predefined List. (This is an alternative to `options`.)

Example:
```yaml
choices:
  - name: Tool Proficiency
    description:
      - >
        You gain proficiency with the artisan's tool of your choice: smith's tools,
        brewer's supplies, or mason's tools.
    type: proficiency
    pick: 1
    options:
      - { type: tool, name: smith's tools }
      ...
```

### Condition Object
Each Condition Object represents the requirements for an unlockable being unlocked.

- `level`: Number of the level required
- `feature`: String name of a feature required
- `proficiency`: Proficiency required (See: "Proficiency Object" in "GENERAL OBJECTS")

### Feature Object
Each Feature Object represents any of the various background, class, or race features.

- `name`: (REQUIRED) String
- `description`: List of paragraph Strings
- `shortDescription`: String abbreviation version of `description`

### Math Object
Each Math Object can replace any Number. It provides a way to have variable values. Each function is performed in order
from first to last, and no nesting is supported.

- `function`: String for the function (`add` | `subtract` | `multiply` | `divide`)
- `params`: List of parameters (Number | `proficiencyBonus` | `level` | `strModifier` | `dexModifier` | `conModifier`|
`wisModifier` | `intModifier` | `chaModifier`)

Example:
```yaml
spellSaveDC:
  math:
    - function: add
      params: [8, proficiencyBonus, charismaModifier]
```

### Proficiency Object
Each Proficiency Object represents being proficient in something. It can be a skill, language, tool, armor, weapon, or
saving throw.

- `name`: (REQUIRED) String
- `description`: List of paragraph Strings
- `type`: (REQUIRED) String for the proficiency type (`armor` | `language` | `saving throw` | `skill` | `tool` |
`weapon`)
- `items`: List of Strings

### Spellcasting Object
The Spellcasting Object defines how spellcasting works.

- `description`: List of paragraph Strings
- `ability`: (REQUIRED) String of the casting ability (`Strength` | `Dexterity` | `Constitution` | `Wisdom` |
`Intelligence` | `Charisma`)
- `focus`: String describing the spellcasting focus
- `cantripsKnown`: Number of level 0 spells known
- `spellsKnown`: Number of level 1+ spells known
- `spells`: (REQUIRED) List of spells (See: "Spell Object" in "GENERAL OBJECTS")
- `spellSlots`: Object defining how many slots are available and how they work (See: "Spell Slots Object" in "GENERAL
OBJECTS")
- `spellSaveDC`: (REQUIRED) 
- `spellAttackModifier`: (REQUIRED) Number

### Spell Object
Each Spell Object represents a spell that can be cast.

- `name`: (REQUIRED) String
- `level`: (REQUIRED) Number from 0 to 9. Level 0 is a cantrip.

### Spell Slots Object
Each Spell Slots Object defines how many spell slots are available and how they work.

- `description`: (REQUIRED) List of paragraph Strings
- `L1`: Number of level one spell slots
- `L2`: Number of level two spell slots
- `L3`: Number of level three spell slots
- `L4`: Number of level four spell slots
- `L5`: Number of level five spell slots
- `L6`: Number of level six spell slots
- `L7`: Number of level seven spell slots
- `L8`: Number of level eight spell slots
- `L9`: Number of level nine spell slots

### Unlockable Object
Each Unlockable Object represents something that can be unlocked once a condition is met.

- `condition`: (REQUIRED) Condition Object defining the requirements to unlock this 
- `features`: List of features acquired by meeting the condition
- `proficiencies`: List of proficiencies acquired by meeting the condition
- `choices`: List of choices available by meeting the condition
- `abilityScoreAdjustments`: List of ability score adjustments acquired by meeting the condition. (See: "Ability Score
Adjustment Object" in "GENERAL OBJECTS")
- `speed`: Number for the movement speed (in feet) acquired by meeting the condition.
