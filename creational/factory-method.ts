// Dzięki metodzie wytwórczej możliwe jest zdefiniowanie części wspólnej dla generowanej faktury 
// oraz części specyficznych dla konkretnych podklas.
{
    interface InvoiceParams {
        country: string;
    }
    
    interface IInvoice {
        direction?: string;
        currency?: string;
        dateFormat?: string;
    }
    
    abstract class Invoice {
        protected abstract format(invoice: IInvoice): IInvoice;
    
        public create(): IInvoice {
            return this.format(this._generateInvoice());
        }
    
        protected abstract _generateInvoice(): IInvoice;
    }
    
    class InvoicePL extends Invoice {
        protected format(invoice: IInvoice): IInvoice {
            invoice.direction = 'ltr';
            invoice.currency = 'PLN';
            invoice.dateFormat = 'DD/MM/YYYY';
    
            return invoice;
        }
    
        protected _generateInvoice(): IInvoice {
            // Implement PL-specific logic here
            return {};
        }
    }
    
    class InvoiceUSA extends Invoice {
        protected format(invoice: IInvoice): IInvoice {
            // Implement USA-specific formatting logic here
            return invoice;
        }
    
        protected _generateInvoice(): IInvoice {
            // Implement USA-specific logic here
            return {};
        }
    }
    
    class InvoiceSAU extends Invoice {
        protected format(invoice: IInvoice): IInvoice {
            // Implement SAU-specific formatting logic here
            return invoice;
        }
    
        protected _generateInvoice(): IInvoice {
            // Implement SAU-specific logic here
            return {};
        }
    }
    
    class InvoiceFactory {
        public createInvoice(params: InvoiceParams): IInvoice {
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
    const factory: InvoiceFactory = new InvoiceFactory();
    const params: InvoiceParams = { country: 'PL' };
    const invoice: IInvoice = factory.createInvoice(params);
    console.log(invoice);
    
}