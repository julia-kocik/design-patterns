"use strict";
// Prototypes allow us to create new objects by copying an existing object, 
// which can be beneficial in scenarios where the construction of a new object 
// is more efficient by cloning an existing one (we don't need to create concrete factory per each product if products are quite similar).
// Abstract Product A
{
    // Concrete Product A1
    class ConcreteProductA1 {
        clone() {
            return new ConcreteProductA1();
        }
        operationA() {
            return 'ConcreteProductA1 operationA';
        }
    }
    // Concrete Product A2
    class ConcreteProductA2 {
        clone() {
            return new ConcreteProductA2();
        }
        operationA() {
            return 'ConcreteProductA2 operationA';
        }
    }
    // Concrete Factory 1
    class ConcreteFactory {
        constructor(productAPrototype) {
            this.productAPrototype = productAPrototype;
        }
        createProductA() {
            return this.productAPrototype.clone();
        }
    }
    // Client
    class Client {
        constructor(factory) {
            this.factory = factory;
        }
        operate() {
            const productA = this.factory.createProductA();
            console.log(productA.operationA());
        }
    }
    // Example usage
    const productAPrototype1 = new ConcreteProductA1();
    const factory1 = new ConcreteFactory(productAPrototype1);
    const client1 = new Client(factory1);
    client1.operate();
    const productAPrototype2 = new ConcreteProductA2();
    const factory2 = new ConcreteFactory(productAPrototype2);
    const client2 = new Client(factory2);
    client2.operate();
}
