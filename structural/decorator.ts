// Attach additional responsibilities to object dynamically (flexible alternative for subclassing to extend functionality)
{
    // Decorator function
function logTime(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with arguments: ${JSON.stringify(args)}`);
        const startTime = Date.now();
        const result = originalMethod.apply(this, args);
        const endTime = Date.now();
        console.log(`Execution time: ${endTime - startTime} milliseconds`);
        return result;
    };

    return descriptor;
}

// Class with decorated method
class Calculator {
    @logTime
    add(a: number, b: number): number {
        return a + b;
    }
}

// Example usage
const calculator = new Calculator();
const result = calculator.add(3, 7);
console.log(`Result: ${result}`);

}