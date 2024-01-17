"use strict";
// Product
// The Builder pattern is a creational design pattern that separates the construction
// of a complex object from its representation, allowing the same construction process to create different representation
{
    class Product {
        constructor() {
            this.parts = [];
        }
        addPart(part) {
            this.parts.push(part);
        }
        show() {
            console.log(`Product parts: ${this.parts.join(', ')}`);
        }
    }
    // Concrete Builder A
    class ConcreteBuilderA {
        constructor() {
            this.product = new Product();
        }
        buildPartA() {
            this.product.addPart('PartA for BuilderA');
        }
        buildPartB() {
            this.product.addPart('PartB for BuilderA');
        }
        getResult() {
            return this.product;
        }
    }
    // Concrete Builder B
    class ConcreteBuilderB {
        constructor() {
            this.product = new Product();
        }
        buildPartA() {
            this.product.addPart('PartA for BuilderB');
        }
        buildPartB() {
            this.product.addPart('PartB for BuilderB');
        }
        getResult() {
            return this.product;
        }
    }
    // Director
    class Director {
        construct(builder) {
            builder.buildPartA();
            builder.buildPartB();
        }
    }
    // Client
    class Client {
        constructor() {
            this.director = new Director();
        }
        constructAndShow(builder) {
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
