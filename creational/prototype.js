"use strict";
// The Prototype Pattern is a creational design pattern that allows you to create new objects 
// by copying an existing object, known as the prototype.
{
    class Animal {
        constructor(legs) {
            this.legs = legs;
        }
    }
    class Dog extends Animal {
        bark() {
            console.log("Woof! Woof!");
        }
        clone() {
            // Create a new object with the same prototype
            const clonedDog = Object.create(this);
            // Set any additional properties that need to be copied
            clonedDog.legs = this.legs;
            return clonedDog;
        }
    }
    // Create an instance of Dog as a prototype
    const prototypeDog = new Dog(4);
    // Use the prototype to create a new instance (clone)
    const myDog = prototypeDog.clone();
    console.log(myDog.legs); // Output: 4
    myDog.bark(); // Output: Woof! Woof!
    // You can modify the cloned object without affecting the prototype
    myDog.legs = 3;
    console.log(myDog.legs); // Output: 3
    // Original prototype remains unchanged
    console.log(prototypeDog.legs); // Output: 4
}
