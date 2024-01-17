"use strict";
// The Abstract Factory pattern is a creational design pattern that provides an interface for creating families
// of related or dependent objects without specifying their concrete classes. W fabryce abstrakcyjnej każda konkretna fabryka produkuje rodziny powiązanych obiektów.
// Abstract Product A
{
  // Concrete Product A1
  class ConcreteProductA1 {
    operationA() {
      return "ConcreteProductA1 operationA";
    }
  }
  // Concrete Product A2
  class ConcreteProductA2 {
    operationA() {
      return "ConcreteProductA2 operationA";
    }
  }
  // Concrete Product B1
  class ConcreteProductB1 {
    operationB() {
      return "ConcreteProductB1 operationB";
    }
  }
  // Concrete Product B2
  class ConcreteProductB2 {
    operationB() {
      return "ConcreteProductB2 operationB";
    }
  }
  // Concrete Factory 1
  class ConcreteFactory1 {
    createProductA() {
      return new ConcreteProductA1();
    }
    createProductB() {
      return new ConcreteProductB1();
    }
  }
  // Concrete Factory 2
  class ConcreteFactory2 {
    createProductA() {
      return new ConcreteProductA2();
    }
    createProductB() {
      return new ConcreteProductB2();
    }
  }
  // Client
  class Client {
    constructor(factory) {
      this.factory = factory;
    }
    operate() {
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
