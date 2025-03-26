# Random Fractal Generator  

This is a web application based on p5.js that allows users to generate and customize random fractal shapes through interactive controls. You can experience the application online: [OOP-Random-Fractals](https://huichuan1999.github.io/OOP-Random-Fractals/).  

## Features  

- **Interactive Interface And Customization Options**: Intuitive buttons and sliders, make it ease to adjust fractal parameters such as colors and angles in real-time.
- **Save Images and SVGs**: Click the "Save SVG" or "Save Image" button to save .svg and .png files.  

## How to Use  

- **Buttons**:  
  - **Save SVG**: Save Current frame as .SVG file.
  - **Save Image**: Save Current frame as .PNG file.
  - **Clear Mode**: Draw dark background and feedback layers, if turn it on, it may cause bad frame rate.
  - **Draw Fruits**: Draw little ellipses at end of branches.

- **Sliders**:  
  - **Red, Green, Blue**: Controls the RGB value of stroke color.
  - **Alpha**: Controls transparency of the shape.

  - **Stroke**: Controls the fractal's stroke wetight.  
  - **Depth**: Determines the recursion iteration depth of the fractal, affecting its complexity. Turning it too high may cause bad frameRate.
  - **Angle**: Adjusts the branching angle of the fractal.  
  - **Length**: Sets the length of fractal branches.  

## Project Structure  

- **index.html**: The main HTML file containing the application's structure.  
- **style.css**: Stylesheet defining the application's appearance and layout.  
- **sketch.js**: The main JavaScript file containing the fractal generation logic.  
- **Branch.js**: Defines the fractal branch class and related methods.  
- **ButtonClass.js**: Handles button creation and interaction logic.  
- **SliderClass.js**: Manages slider creation and interaction.  
- **p5.js**: The core p5.js library for drawing and interactivity.  
- **p5.sound.min.js**: The p5.js sound library (not currently used in this project).  

## Running the Project  

1. Clone the repository to your local machine:  

   ```bash
   git clone https://github.com/huichuan1999/OOP-Random-Fractals.git
   ```

2. Open the `index.html` file in a browser to run the application.  

## Dependencies  

- [p5.js](https://p5js.org/): A JavaScript library for creative coding, simplifying drawing and interaction.  
