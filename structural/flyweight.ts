// Use sharing to support large numbers of fine-grained objects efficiently 
{
    // Flyweight interface
interface CharacterFlyweight {
    display(): void;
  }
  
  // ConcreteFlyweight class representing a character
  class ConcreteCharacter implements CharacterFlyweight {
    private character: string;
  
    constructor(character: string) {
      this.character = character;
    }
  
    display(): void {
      console.log(this.character);
    }
  }
  
  // FlyweightFactory class manages and provides character flyweights
  class CharacterFlyweightFactory {
    private characterFlyweights: { [key: string]: ConcreteCharacter } = {};
  
    getCharacter(character: string): CharacterFlyweight {
      if (!this.characterFlyweights[character]) {
        this.characterFlyweights[character] = new ConcreteCharacter(character);
      }
      return this.characterFlyweights[character];
    }
  
    getCharacterCount(): number {
      return Object.keys(this.characterFlyweights).length;
    }
  }
  
  // Client code - represents a line of text using character flyweights
  class TextLine {
    private characters: CharacterFlyweight[] = [];
  
    addCharacter(character: string, position: number): void {
      const flyweight = characterFlyweightFactory.getCharacter(character);
      this.characters[position] = flyweight;
    }
  
    display(): void {
      this.characters.forEach((character) => character.display());
    }
  }
  
  // Create a character flyweight factory
  const characterFlyweightFactory = new CharacterFlyweightFactory();
  
  // Client code using the text editor
  const textLine = new TextLine();
  
  textLine.addCharacter("H", 0);
  textLine.addCharacter("e", 1);
  textLine.addCharacter("l", 2);
  textLine.addCharacter("l", 3);
  textLine.addCharacter("o", 4);
  
  // Display the text line, reusing character flyweights
  textLine.display();
  
  console.log(`Number of character flyweights created: ${characterFlyweightFactory.getCharacterCount()}`);
  
}