var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// W systemie istnieje kilka instancji fabryk i zaszła sytuacja, że kilku klientów otrzymało faktury z tymi samymi numerami. 
// W celu uniknięcia duplikatów generowanych faktur można wykorzystać wzorzec fabryki statycznej. Taka fabryka staje się jednocześnie Singletonem.
{
    var Invoice = /** @class */ (function () {
        function Invoice() {
        }
        Invoice.prototype.create = function () {
            return this.format(this._generateInvoice());
        };
        return Invoice;
    }());
    var InvoicePL_1 = /** @class */ (function (_super) {
        __extends(InvoicePL, _super);
        function InvoicePL(params) {
            var _this = _super.call(this) || this;
            _this.params = params;
            return _this;
        }
        InvoicePL.prototype.format = function (invoice) {
            invoice.direction = 'ltr';
            invoice.currency = 'PLN';
            invoice.dateFormat = 'DD/MM/YYYY';
            invoice.invoiceId = this.params.invoiceId;
            return invoice;
        };
        InvoicePL.prototype._generateInvoice = function () {
            return { invoiceId: '' }; // Placeholder logic, replace with actual logic
        };
        return InvoicePL;
    }(Invoice));
    var InvoiceUSA_1 = /** @class */ (function (_super) {
        __extends(InvoiceUSA, _super);
        function InvoiceUSA(params) {
            var _this = _super.call(this) || this;
            _this.params = params;
            return _this;
        }
        InvoiceUSA.prototype.format = function (invoice) {
            invoice.invoiceId = this.params.invoiceId;
            return invoice;
        };
        InvoiceUSA.prototype._generateInvoice = function () {
            return { invoiceId: '' }; // Placeholder logic, replace with actual logic
        };
        return InvoiceUSA;
    }(Invoice));
    var InvoiceSAU_1 = /** @class */ (function (_super) {
        __extends(InvoiceSAU, _super);
        function InvoiceSAU(params) {
            var _this = _super.call(this) || this;
            _this.params = params;
            return _this;
        }
        InvoiceSAU.prototype.format = function (invoice) {
            invoice.invoiceId = this.params.invoiceId;
            return invoice;
        };
        InvoiceSAU.prototype._generateInvoice = function () {
            return { invoiceId: '' }; // Placeholder logic, replace with actual logic
        };
        return InvoiceSAU;
    }(Invoice));
    var InvoiceFactory_1 = /** @class */ (function () {
        function InvoiceFactory() {
        }
        InvoiceFactory.createInvoice = function (params) {
            if (InvoiceFactory.generatedInvoices.has(params.invoiceId)) {
                throw new Error('invoiceId already used!');
            }
            switch (params.country) {
                case 'PL':
                    return new InvoicePL_1(params).create();
                case 'USA':
                    return new InvoiceUSA_1(params).create();
                case 'SAU':
                    return new InvoiceSAU_1(params).create();
                default:
                    throw new Error('Unsupported country!');
            }
        };
        InvoiceFactory.generatedInvoices = new Set();
        return InvoiceFactory;
    }());
    // Example usage
    var params = { country: 'PL', invoiceId: '123' };
    var invoice = InvoiceFactory_1.createInvoice(params);
    console.log(invoice);
}
