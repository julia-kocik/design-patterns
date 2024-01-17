{
    interface IDocument {
        generateDocument(): void;
      }
      
      class Invoice implements IDocument {
        generateDocument(): void {
          console.log('Generating Invoice document...');
          // Implement invoice-specific generation logic
        }
      }
      
      class Report implements IDocument {
        generateDocument(): void {
          console.log('Generating Report document...');
          // Implement report-specific generation logic
        }
      }
      
      interface IAbstractFactory {
        generate(): IDocument;
      }
      
      class InvoicesFactory implements IAbstractFactory {
        generate(): IDocument {
          return new Invoice();
        }
      }
      
      class ReportsFactory implements IAbstractFactory {
        generate(): IDocument {
          return new Report();
        }
      }
      
      class PrintingService {
        public constructor(private readonly _documentFactory: IAbstractFactory) {}
      
        public generate(): void {
          this._sendToPrinter(this._documentFactory.generate());
        }
      
        private _sendToPrinter(document: IDocument): void {
          console.log('Sending document to printer...');
          document.generateDocument();
        }
      }
      
      const invoicePrintingService = new PrintingService(new InvoicesFactory());
      const reportPrintingService = new PrintingService(new ReportsFactory());
      
      invoicePrintingService.generate();
      reportPrintingService.generate();
      
}