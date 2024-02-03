var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Provide a unified interface to a set of interfaces in a substystem - higher level interface to make system easier to use
// should hide implementation details - real life example ATM
{
    var MarkdownPrinter_1 = /** @class */ (function () {
        function MarkdownPrinter() {
            this._format = 'md';
        }
        MarkdownPrinter.prototype.getFormat = function () {
            return this._format;
        };
        MarkdownPrinter.prototype.print = function (content) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // ... magic specific to Markdown printing
                    return [2 /*return*/, Buffer.from("Markdown content: ".concat(content))];
                });
            });
        };
        return MarkdownPrinter;
    }());
    var DOCXPrinter_1 = /** @class */ (function () {
        function DOCXPrinter() {
            this._format = 'docx';
        }
        DOCXPrinter.prototype.getFormat = function () {
            return this._format;
        };
        DOCXPrinter.prototype.print = function (content) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // ... magic specific to DOCX printing
                    return [2 /*return*/, Buffer.from("DOCX content: ".concat(content))];
                });
            });
        };
        return DOCXPrinter;
    }());
    var PDFPrinter_1 = /** @class */ (function () {
        function PDFPrinter() {
            this._format = 'pdf';
        }
        PDFPrinter.prototype.getFormat = function () {
            return this._format;
        };
        PDFPrinter.prototype.print = function (content) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // ... magic specific to PDF printing
                    return [2 /*return*/, Buffer.from("PDF content: ".concat(content))];
                });
            });
        };
        return PDFPrinter;
    }());
    var DocumentFacade_1 = /** @class */ (function () {
        function DocumentFacade() {
            this._printers = [
                new DOCXPrinter_1(),
                new MarkdownPrinter_1(),
                new PDFPrinter_1()
            ];
        }
        DocumentFacade.prototype.printDocument = function (format, content) {
            return __awaiter(this, void 0, void 0, function () {
                var printer;
                return __generator(this, function (_a) {
                    printer = this._printers.find(function (printer) { return printer.getFormat() === format; });
                    if (!printer) {
                        throw new Error('Document format not supported.');
                    }
                    return [2 /*return*/, printer.print(content)];
                });
            });
        };
        return DocumentFacade;
    }());
    function run() {
        return __awaiter(this, void 0, void 0, function () {
            var documentFacade, mdContent, docxContent, pdfContent, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        documentFacade = new DocumentFacade_1();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, documentFacade.printDocument('md', 'Markdown content')];
                    case 2:
                        mdContent = _a.sent();
                        console.log(mdContent.toString());
                        return [4 /*yield*/, documentFacade.printDocument('docx', 'DOCX content')];
                    case 3:
                        docxContent = _a.sent();
                        console.log(docxContent.toString());
                        return [4 /*yield*/, documentFacade.printDocument('pdf', 'PDF content')];
                    case 4:
                        pdfContent = _a.sent();
                        console.log(pdfContent.toString());
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    run();
}
