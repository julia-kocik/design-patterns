// Product
// The Builder pattern is a creational design pattern that separates the construction
// of a complex object from its representation, allowing the same construction process to create different representation
{
class Product {
    private parts: string[] = [];
  
    addPart(part: string): void {
      this.parts.push(part);
    }
  
    show(): void {
      console.log(`Product parts: ${this.parts.join(', ')}`);
    }
  }
  
  // Builder interface
  interface Builder {
    buildPartA(): void;
    buildPartB(): void;
    getResult(): Product;
  }
  
  // Concrete Builder A
  class ConcreteBuilderA implements Builder {
    private product: Product = new Product();
  
    buildPartA(): void {
      this.product.addPart('PartA for BuilderA');
    }
  
    buildPartB(): void {
      this.product.addPart('PartB for BuilderA');
    }
  
    getResult(): Product {
      return this.product;
    }
  }
  
  // Concrete Builder B
  class ConcreteBuilderB implements Builder {
    private product: Product = new Product();
  
    buildPartA(): void {
      this.product.addPart('PartA for BuilderB');
    }
  
    buildPartB(): void {
      this.product.addPart('PartB for BuilderB');
    }
  
    getResult(): Product {
      return this.product;
    }
  }
  
  // Director
  class Director {
    construct(builder: Builder): void {
      builder.buildPartA();
      builder.buildPartB();
    }
  }
  
  // Client
  class Client {
    private director: Director = new Director();
  
    constructAndShow(builder: Builder): void {
      this.director.construct(builder);
      const product = builder.getResult();
      product.show();
    }
  }
  
  // Example usage
  const builderA = new ConcreteBuilderA();
  const clientA = new Client();
  clientA.constructAndShow(builderA);
  
  const builderB = new ConcreteBuilderB();
  const clientB = new Client();
  clientB.constructAndShow(builderB);
}  