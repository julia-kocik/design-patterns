// Product
// The Builder pattern is a creational design pattern that separates the construction
// of a complex object from its representation, allowing the same construction process to create different representation
{
    var Product_1 = /** @class */ (function () {
        function Product() {
            this.parts = [];
        }
        Product.prototype.addPart = function (part) {
            this.parts.push(part);
        };
        Product.prototype.show = function () {
            console.log("Product parts: ".concat(this.parts.join(', ')));
        };
        return Product;
    }());
    // Concrete Builder A
    var ConcreteBuilderA = /** @class */ (function () {
        function ConcreteBuilderA() {
            this.product = new Product_1();
        }
        ConcreteBuilderA.prototype.buildPartA = function () {
            this.product.addPart('PartA for BuilderA');
        };
        ConcreteBuilderA.prototype.buildPartB = function () {
            this.product.addPart('PartB for BuilderA');
        };
        ConcreteBuilderA.prototype.getResult = function () {
            return this.product;
        };
        return ConcreteBuilderA;
    }());
    // Concrete Builder B
    var ConcreteBuilderB = /** @class */ (function () {
        function ConcreteBuilderB() {
            this.product = new Product_1();
        }
        ConcreteBuilderB.prototype.buildPartA = function () {
            this.product.addPart('PartA for BuilderB');
        };
        ConcreteBuilderB.prototype.buildPartB = function () {
            this.product.addPart('PartB for BuilderB');
        };
        ConcreteBuilderB.prototype.getResult = function () {
            return this.product;
        };
        return ConcreteBuilderB;
    }());
    // Director
    var Director_1 = /** @class */ (function () {
        function Director() {
        }
        Director.prototype.construct = function (builder) {
            builder.buildPartA();
            builder.buildPartB();
        };
        return Director;
    }());
    // Client
    var Client = /** @class */ (function () {
        function Client() {
            this.director = new Director_1();
        }
        Client.prototype.constructAndShow = function (builder) {
            this.director.construct(builder);
            var product = builder.getResult();
            product.show();
        };
        return Client;
    }());
    // Example usage
    var builderA = new ConcreteBuilderA();
    var clientA = new Client();
    clientA.constructAndShow(builderA);
    var builderB = new ConcreteBuilderB();
    var clientB = new Client();
    clientB.constructAndShow(builderB);
    // 
    var Country = /** @class */ (function () {
        function Country(country) {
            Object.assign(this, country);
        }
        return Country;
    }());
    var country = new Country({ name: "Brazil", demonym: "Brazilian" });
    console.log(country);
}
