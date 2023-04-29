class CustomButton {
    constructor(labelText, callback, parentID) {
      this.button = createButton(labelText);
      this.button.mousePressed(callback);
      this.button.parent(parentID);
    }
  }