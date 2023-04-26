// Imports fs, inquirer, Circle, Square, and Triangle modules.
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

// Creating a Svg class that has an constructor with three methods
class Svg {
    constructor() {
      this.textElement = '';
      this.shapeElement = '';
    }
  
    render() {
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
  
    setTextElement(text, color) {
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
  
    setShapeElement(shape) {
      this.shapeElement = shape.render();
    }
  }
  

//Creating questions for user input.
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to write data to file
function writeToFile(fileName,data){
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName,data,function (err){
        if(err){
            return console.log(err);
        }
        console.log("Great job,you have generated a logo.svg!")
    });
}

async function init() {
    console.log('Start init');
    var svgString = "";
    var svg_file = "logo.svg";

    //creat user answers
    const answers = await inquirer.prompt(questions);

    //user text
    var user_text = "";
    user_text= answers.text;
    console.log("User text: [" + user_text + "]");
    //user font color
    user_font_color = answers["text-color"];
    console.log ("User font color:[" + user_font_color + "]");
    //user shape color
    user_shape_color = answers.shape;
    console.log("User shape color: [" + user_shape_color + "]");
    //user shape type
    user_shape_type = answers["pixel-image"];
	console.log("User entered shape = [" + user_shape_type + "]");

    //user shape
    let user_shape = null;
    if (user_shape_type ==="Square" || user_shape_type ==="square") {
        user_shape = new Square();
        console.log("User selected Square shape");
    }
    else if (user_shape_type ==="Circle" || user_shape_type ==="circle"){
        user_shape = new Circle();
        console.log("User selected Circle shape")
    }
    else if (user_shape_type ==="Triangle" || user_shape_type ==="triangle"){
        user_shape = new Triangle();
        console.log("User seleced Triangle shape");
    }

    if (user_shape !== null) {
        user_shape.setColor(user_shape_color);
        // Create a new Svg instance and add the shape and text elements to it
        var svg = new Svg()
        svg.setTextElement(user_text, user_font_color);
        svg.setShapeElement(user_shape);
        svgString = svg.render();

        console.log("Displaying shape:\n\n" + svgString);
        console.log("Shape generation complete!");
        console.log("Writing shape to file...");
        writeToFile(svg_file, svgString); 
    } else {
        console.log("Invalid shape selected!");
    }
}
init()