// provides surogate or placeholder for another object to control access to it 
// pośredniczenie między programistą a obiektem docelowym
{
    // RealImage class representing the real image
    var RealImage_1 = /** @class */ (function () {
        function RealImage(filename) {
            this.filename = filename;
            this.loadImage();
        }
        RealImage.prototype.loadImage = function () {
            console.log("Loading image: ".concat(this.filename));
            // Simulate loading an image from a file
        };
        RealImage.prototype.display = function () {
            console.log("Displaying image: ".concat(this.filename));
            // Simulate displaying the image
        };
        return RealImage;
    }());
    // ImageProxy class representing the proxy for the real image
    var ImageProxy = /** @class */ (function () {
        function ImageProxy(filename, accessLevel) {
            this.realImage = null;
            this.filename = filename;
            this.accessLevel = accessLevel;
        }
        ImageProxy.prototype.checkAccess = function () {
            // Simulate access control logic based on access level
            return this.accessLevel >= 2; // For example, allow access only if access level is 2 or higher
        };
        ImageProxy.prototype.display = function () {
            if (this.checkAccess()) {
                // Create the real image only when it's actually needed
                if (!this.realImage) {
                    this.realImage = new RealImage_1(this.filename);
                }
                this.realImage.display();
            }
            else {
                console.log("Access denied for image: ".concat(this.filename));
            }
        };
        return ImageProxy;
    }());
    // Client code using the image proxy
    var allowedImage = new ImageProxy("sample.jpg", 2);
    var restrictedImage = new ImageProxy("top-secret.jpg", 1);
    // The real image is loaded and displayed only when needed, based on access control
    allowedImage.display();
    restrictedImage.display();
}
