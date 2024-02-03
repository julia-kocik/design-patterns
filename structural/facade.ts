// Provide a unified interface to a set of interfaces in a substystem - higher level interface to make system easier to use
// should hide implementation details - real life example ATM
{
    interface IPrinter {
        getFormat(): string;
        print(content: string): Promise<Buffer>;
    }
    
    class MarkdownPrinter implements IPrinter {
        private readonly _format: string = 'md';
    
        public getFormat(): string {
            return this._format;
        }
    
        public async print(content: string): Promise<Buffer> {
            // ... magic specific to Markdown printing
            return Buffer.from(`Markdown content: ${content}`);
        }
    }
    
    class DOCXPrinter implements IPrinter {
        private readonly _format: string = 'docx';
    
        public getFormat(): string {
            return this._format;
        }
    
        public async print(content: string): Promise<Buffer> {
            // ... magic specific to DOCX printing
            return Buffer.from(`DOCX content: ${content}`);
        }
    }
    
    class PDFPrinter implements IPrinter {
        private readonly _format: string = 'pdf';
    
        public getFormat(): string {
            return this._format;
        }
    
        public async print(content: string): Promise<Buffer> {
            // ... magic specific to PDF printing
            return Buffer.from(`PDF content: ${content}`);
        }
    }
    
    class DocumentFacade {
        private readonly _printers: IPrinter[];
    
        public constructor() {
            this._printers = [
                new DOCXPrinter(),
                new MarkdownPrinter(),
                new PDFPrinter()
            ];
        }
    
        public async printDocument(format: string, content: string): Promise<Buffer> {
            const printer: IPrinter | undefined = this._printers.find(printer => printer.getFormat() === format);
    
            if (!printer) {
                throw new Error('Document format not supported.');
            }
    
            return printer.print(content);
        }
    }
    
    async function run() {
        const documentFacade = new DocumentFacade();
    
        try {
            const mdContent = await documentFacade.printDocument('md', 'Markdown content');
            console.log(mdContent.toString());
    
            const docxContent = await documentFacade.printDocument('docx', 'DOCX content');
            console.log(docxContent.toString());
    
            const pdfContent = await documentFacade.printDocument('pdf', 'PDF content');
            console.log(pdfContent.toString());
        } catch (error) {
            console.error(error.message);
        }
    }
    
    run();
    
}