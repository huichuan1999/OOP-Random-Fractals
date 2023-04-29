class ColorSlider {
    constructor(labelText, initialValue, parentID) {
        this.label = createP(labelText);
        this.label.parent(parentID);
        this.slider = createSlider(0, 255, initialValue);
        this.slider.parent(parentID);
        this.slider.addClass("custom-slider");
    }
}

class NumberSlider {
    constructor(labelText, minVal, maxVal, initialValue, step, parentID) {
        this.label = createP(labelText);
        this.label.parent(parentID);
        this.slider = createSlider(minVal, maxVal, initialValue, step);
        this.slider.parent(parentID);
        this.slider.addClass("custom-slider");
    }
}