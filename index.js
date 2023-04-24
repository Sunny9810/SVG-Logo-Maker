// Imports fs, inquirer, Circle, Square, and Triangle modules.
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

// Creating a Svg class that has an constructor with three methods
class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){ return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
}
setTextElement(text,color){
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
}
setShapeElement(shape){
    this.shapeElement = shape.render()

}

}

//Creating questions for user input.
const questions=[
    {
        type:"input",
        name:"text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type:"input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword:",
    },
    {
        type:"list",
        name:"pixel-img",
        message:["Circle","Square","Triangle"],
    },
];