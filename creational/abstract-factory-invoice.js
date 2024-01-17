{
    var Invoice_1 = /** @class */ (function () {
        function Invoice() {
        }
        Invoice.prototype.generateDocument = function () {
            console.log('Generating Invoice document...');
            // Implement invoice-specific generation logic
        };
        return Invoice;
    }());
    var Report_1 = /** @class */ (function () {
        function Report() {
        }
        Report.prototype.generateDocument = function () {
            console.log('Generating Report document...');
            // Implement report-specific generation logic
        };
        return Report;
    }());
    var InvoicesFactory = /** @class */ (function () {
        function InvoicesFactory() {
        }
        InvoicesFactory.prototype.generate = function () {
            return new Invoice_1();
        };
        return InvoicesFactory;
    }());
    var ReportsFactory = /** @class */ (function () {
        function ReportsFactory() {
        }
        ReportsFactory.prototype.generate = function () {
            return new Report_1();
        };
        return ReportsFactory;
    }());
    var PrintingService = /** @class */ (function () {
        function PrintingService(_documentFactory) {
            this._documentFactory = _documentFactory;
        }
        PrintingService.prototype.generate = function () {
            this._sendToPrinter(this._documentFactory.generate());
        };
        PrintingService.prototype._sendToPrinter = function (document) {
            console.log('Sending document to printer...');
            document.generateDocument();
        };
        return PrintingService;
    }());
    var invoicePrintingService = new PrintingService(new InvoicesFactory());
    var reportPrintingService = new PrintingService(new ReportsFactory());
    invoicePrintingService.generate();
    reportPrintingService.generate();
}
