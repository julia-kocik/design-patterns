// W systemie istnieje kilka instancji fabryk i zaszła sytuacja, że kilku klientów otrzymało faktury z tymi samymi numerami. 
// W celu uniknięcia duplikatów generowanych faktur można wykorzystać wzorzec fabryki statycznej. Taka fabryka staje się jednocześnie Singletonem.
{
    interface InvoiceParams {
        country: string;
        invoiceId: string;
    }
    
    interface IInvoice {
        direction?: string;
        currency?: string;
        dateFormat?: string;
        invoiceId: string;
    }
    
    abstract class Invoice {
        protected abstract format(invoice: IInvoice): IInvoice;
    
        public create(): IInvoice {
            return this.format(this._generateInvoice());
        }
    
        protected abstract _generateInvoice(): IInvoice;
    }
    
    class InvoicePL extends Invoice {
        private params: InvoiceParams;
    
        constructor(params: InvoiceParams) {
            super();
            this.params = params;
        }
    
        protected format(invoice: IInvoice): IInvoice {
            invoice.direction = 'ltr';
            invoice.currency = 'PLN';
            invoice.dateFormat = 'DD/MM/YYYY';
            invoice.invoiceId = this.params.invoiceId;
    
            return invoice;
        }
    
        protected _generateInvoice(): IInvoice {
            return { invoiceId: '' }; // Placeholder logic, replace with actual logic
        }
    }
    
    class InvoiceUSA extends Invoice {
        private params: InvoiceParams;
    
        constructor(params: InvoiceParams) {
            super();
            this.params = params;
        }
    
        protected format(invoice: IInvoice): IInvoice {
            invoice.invoiceId = this.params.invoiceId;
            return invoice;
        }
    
        protected _generateInvoice(): IInvoice {
            return { invoiceId: '' }; // Placeholder logic, replace with actual logic
        }
    }
    
    class InvoiceSAU extends Invoice {
        private params: InvoiceParams;
    
        constructor(params: InvoiceParams) {
            super();
            this.params = params;
        }
    
        protected format(invoice: IInvoice): IInvoice {
            invoice.invoiceId = this.params.invoiceId;
            return invoice;
        }
    
        protected _generateInvoice(): IInvoice {
            return { invoiceId: '' }; // Placeholder logic, replace with actual logic
        }
    }
    
    class InvoiceFactory {
        private static generatedInvoices: Set<string> = new Set();
    
        public static createInvoice(params: InvoiceParams): IInvoice {
            if (InvoiceFactory.generatedInvoices.has(params.invoiceId)) {
                throw new Error('invoiceId already used!');
            }
    
            switch (params.country) {
                case 'PL':
                    return new InvoicePL(params).create();
                case 'USA':
                    return new InvoiceUSA(params).create();
                case 'SAU':
                    return new InvoiceSAU(params).create();
                default:
                    throw new Error('Unsupported country!');
            }
        }
    }
    
    // Example usage
    const params: InvoiceParams = { country: 'PL', invoiceId: '123' };
    const invoice: IInvoice = InvoiceFactory.createInvoice(params);
    console.log(invoice);
    
}