// provides surogate or placeholder for another object to control access to it 
// pośredniczenie między programistą a obiektem docelowym
{
    // Subject interface representing the real image and proxy
interface Image {
    display(): void;
  }
  
  // RealImage class representing the real image
  class RealImage implements Image {
    private filename: string;
  
    constructor(filename: string) {
      this.filename = filename;
      this.loadImage();
    }
  
    private loadImage(): void {
      console.log(`Loading image: ${this.filename}`);
      // Simulate loading an image from a file
    }
  
    display(): void {
      console.log(`Displaying image: ${this.filename}`);
      // Simulate displaying the image
    }
  }
  
  // ImageProxy class representing the proxy for the real image
  class ImageProxy implements Image {
    private realImage: RealImage | null = null;
    private filename: string;
    private accessLevel: number;
  
    constructor(filename: string, accessLevel: number) {
      this.filename = filename;
      this.accessLevel = accessLevel;
    }
  
    private checkAccess(): boolean {
      // Simulate access control logic based on access level
      return this.accessLevel >= 2; // For example, allow access only if access level is 2 or higher
    }
  
    display(): void {
      if (this.checkAccess()) {
        // Create the real image only when it's actually needed
        if (!this.realImage) {
          this.realImage = new RealImage(this.filename);
        }
  
        this.realImage.display();
      } else {
        console.log(`Access denied for image: ${this.filename}`);
      }
    }
  }
  
  // Client code using the image proxy
  const allowedImage: Image = new ImageProxy("sample.jpg", 2);
  const restrictedImage: Image = new ImageProxy("top-secret.jpg", 1);
  
  // The real image is loaded and displayed only when needed, based on access control
  allowedImage.display();
  restrictedImage.display();
  
}

