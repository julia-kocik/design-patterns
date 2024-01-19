"use strict";
// Dzięki metodzie wytwórczej możliwe jest zdefiniowanie części wspólnej dla generowanej faktury 
// oraz części specyficznych dla konkretnych podklas.
{
    class Invoice {
        create() {
            return this.format(this._generateInvoice());
        }
    }
    class InvoicePL extends Invoice {
        format(invoice) {
            invoice.direction = 'ltr';
            invoice.currency = 'PLN';
            invoice.dateFormat = 'DD/MM/YYYY';
            return invoice;
        }
        _generateInvoice() {
            // Implement PL-specific logic here
            return {};
        }
    }
    class InvoiceUSA extends Invoice {
        format(invoice) {
            // Implement USA-specific formatting logic here
            return invoice;
        }
        _generateInvoice() {
            // Implement USA-specific logic here
            return {};
        }
    }
    class InvoiceSAU extends Invoice {
        format(invoice) {
            // Implement SAU-specific formatting logic here
            return invoice;
        }
        _generateInvoice() {
            // Implement SAU-specific logic here
            return {};
        }
    }
    class InvoiceFactory {
        createInvoice(params) {
            switch (params.country) {
                case 'PL':
                    return new InvoicePL().create();
                case 'USA':
                    return new InvoiceUSA().create();
                case 'SAU':
                    return new InvoiceSAU().create();
                default:
                    throw new Error('Unsupported country!');
            }
        }
    }
    // Example usage
    const factory = new InvoiceFactory();
    const params = { country: 'PL' };
    const invoice = factory.createInvoice(params);
    console.log(invoice);
}
