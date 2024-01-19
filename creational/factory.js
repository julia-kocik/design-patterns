"use strict";
// The Factory Pattern is a creational design pattern that provides an interface for creating objects in a super class,
// but leaves the choice of its type to the subclasses, creating the objects.
{
    class InvoicePL {
        constructor(params) {
            // Implement PL-specific logic here
            console.log(`Creating Polish invoice with params: ${JSON.stringify(params)}`);
        }
        generateInvoice() {
            console.log('Generating Polish invoice');
            // Implement PL-specific invoice generation logic here
        }
    }
    class InvoiceUSA {
        constructor(params) {
            // Implement USA-specific logic here
            console.log(`Creating US invoice with params: ${JSON.stringify(params)}`);
        }
        generateInvoice() {
            console.log('Generating US invoice');
            // Implement USA-specific invoice generation logic here
        }
    }
    class InvoiceSAU {
        constructor(params) {
            // Implement SAU-specific logic here
            console.log(`Creating Saudi Arabian invoice with params: ${JSON.stringify(params)}`);
        }
        generateInvoice() {
            console.log('Generating Saudi Arabian invoice');
            // Implement SAU-specific invoice generation logic here
        }
    }
    class InvoiceFactory {
        createInvoice(params) {
            switch (params.country) {
                case 'PL':
                    return this._createInvoicePL(params);
                case 'USA':
                    return this._createInvoiceUSA(params);
                case 'SAU':
                    return this._createInvoiceSAU(params);
                default:
                    throw new Error('Unsupported country!');
            }
        }
        _createInvoicePL(params) {
            return new InvoicePL(params);
        }
        _createInvoiceUSA(params) {
            return new InvoiceUSA(params);
        }
        _createInvoiceSAU(params) {
            return new InvoiceSAU(params);
        }
    }
    // Example usage
    const factory = new InvoiceFactory();
    const params = { country: 'PL' };
    const invoice = factory.createInvoice(params);
    invoice.generateInvoice();
}
