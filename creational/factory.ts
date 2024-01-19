
// The Factory Pattern is a creational design pattern that provides an interface for creating objects in a super class,
// but leaves the choice of its type to the subclasses, creating the objects.
{
    interface InvoiceParams {
    country: string;
}

interface IInvoice {
    generateInvoice(): void;
}

class InvoicePL implements IInvoice {
    constructor(params: InvoiceParams) {
        // Implement PL-specific logic here
        console.log(`Creating Polish invoice with params: ${JSON.stringify(params)}`);
    }

    generateInvoice(): void {
        console.log('Generating Polish invoice');
        // Implement PL-specific invoice generation logic here
    }
}

class InvoiceUSA implements IInvoice {
    constructor(params: InvoiceParams) {
        // Implement USA-specific logic here
        console.log(`Creating US invoice with params: ${JSON.stringify(params)}`);
    }

    generateInvoice(): void {
        console.log('Generating US invoice');
        // Implement USA-specific invoice generation logic here
    }
}

class InvoiceSAU implements IInvoice {
    constructor(params: InvoiceParams) {
        // Implement SAU-specific logic here
        console.log(`Creating Saudi Arabian invoice with params: ${JSON.stringify(params)}`);
    }

    generateInvoice(): void {
        console.log('Generating Saudi Arabian invoice');
        // Implement SAU-specific invoice generation logic here
    }
}

class InvoiceFactory {
    public createInvoice(params: InvoiceParams): IInvoice {
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

    private _createInvoicePL(params: InvoiceParams): InvoicePL {
        return new InvoicePL(params);
    }

    private _createInvoiceUSA(params: InvoiceParams): InvoiceUSA {
        return new InvoiceUSA(params);
    }

    private _createInvoiceSAU(params: InvoiceParams): InvoiceSAU {
        return new InvoiceSAU(params);
    }
}

// Example usage
const factory: InvoiceFactory = new InvoiceFactory();
const params: InvoiceParams = { country: 'PL' };
const invoice: IInvoice = factory.createInvoice(params);
invoice.generateInvoice();
}