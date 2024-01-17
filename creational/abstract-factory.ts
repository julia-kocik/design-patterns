  // The Abstract Factory pattern is a creational design pattern that provides an interface for creating families 
  // of related or dependent objects without specifying their concrete classes.
  
  // Abstract Product A
  {
  interface ProductA {
    operationA(): string;
  }
  
  // Concrete Product A1
  class ConcreteProductA1 implements ProductA {
    operationA(): string {
      return 'ConcreteProductA1 operationA';
    }
  }
  
  // Concrete Product A2
  class ConcreteProductA2 implements ProductA {
    operationA(): string {
      return 'ConcreteProductA2 operationA';
    }
  }
  
  // Abstract Product B
  interface ProductB {
    operationB(): string;
  }
  
  // Concrete Product B1
  class ConcreteProductB1 implements ProductB {
    operationB(): string {
      return 'ConcreteProductB1 operationB';
    }
  }
  
  // Concrete Product B2
  class ConcreteProductB2 implements ProductB {
    operationB(): string {
      return 'ConcreteProductB2 operationB';
    }
  }
  
  // Abstract Factory
  interface AbstractFactory {
    createProductA(): ProductA;
    createProductB(): ProductB;
  }
  
  // Concrete Factory 1
  class ConcreteFactory1 implements AbstractFactory {
    createProductA(): ProductA {
      return new ConcreteProductA1();
    }
  
    createProductB(): ProductB {
      return new ConcreteProductB1();
    }
  }
  
  // Concrete Factory 2
  class ConcreteFactory2 implements AbstractFactory {
    createProductA(): ProductA {
      return new ConcreteProductA2();
    }
  
    createProductB(): ProductB {
      return new ConcreteProductB2();
    }
  }
  
  // Client
  class Client {
    private factory: AbstractFactory;
  
    constructor(factory: AbstractFactory) {
      this.factory = factory;
    }
  
    operate(): void {
      const productA = this.factory.createProductA();
      const productB = this.factory.createProductB();
  
      console.log(productA.operationA());
      console.log(productB.operationB());
    }
  }
  
  // Example usage
  const factory1 = new ConcreteFactory1();
  const client1 = new Client(factory1);
  client1.operate();
  
  const factory2 = new ConcreteFactory2();
  const client2 = new Client(factory2);
  client2.operate();
}