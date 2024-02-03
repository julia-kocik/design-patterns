// Use sharing to support large numbers of fine-grained objects efficiently 
{
    // ConcreteFlyweight class representing a character
    var ConcreteCharacter_1 = /** @class */ (function () {
        function ConcreteCharacter(character) {
            this.character = character;
        }
        ConcreteCharacter.prototype.display = function () {
            console.log(this.character);
        };
        return ConcreteCharacter;
    }());
    // FlyweightFactory class manages and provides character flyweights
    var CharacterFlyweightFactory = /** @class */ (function () {
        function CharacterFlyweightFactory() {
            this.characterFlyweights = {};
        }
        CharacterFlyweightFactory.prototype.getCharacter = function (character) {
            if (!this.characterFlyweights[character]) {
                this.characterFlyweights[character] = new ConcreteCharacter_1(character);
            }
            return this.characterFlyweights[character];
        };
        CharacterFlyweightFactory.prototype.getCharacterCount = function () {
            return Object.keys(this.characterFlyweights).length;
        };
        return CharacterFlyweightFactory;
    }());
    // Client code - represents a line of text using character flyweights
    var TextLine = /** @class */ (function () {
        function TextLine() {
            this.characters = [];
        }
        TextLine.prototype.addCharacter = function (character, position) {
            var flyweight = characterFlyweightFactory_1.getCharacter(character);
            this.characters[position] = flyweight;
        };
        TextLine.prototype.display = function () {
            this.characters.forEach(function (character) { return character.display(); });
        };
        return TextLine;
    }());
    // Create a character flyweight factory
    var characterFlyweightFactory_1 = new CharacterFlyweightFactory();
    // Client code using the text editor
    var textLine = new TextLine();
    textLine.addCharacter("H", 0);
    textLine.addCharacter("e", 1);
    textLine.addCharacter("l", 2);
    textLine.addCharacter("l", 3);
    textLine.addCharacter("o", 4);
    // Display the text line, reusing character flyweights
    textLine.display();
    console.log("Number of character flyweights created: ".concat(characterFlyweightFactory_1.getCharacterCount()));
}
