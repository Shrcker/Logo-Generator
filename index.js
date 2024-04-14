const inquirer = require("inquirer");
const { readFile, writeFile } = require("fs/promises");
const Circle = require("./lib/shape").Circle;
const Triangle = require("./lib/shape").Triangle;
const Square = require("./lib/shape").Square;

const shapesList = ["Circle", "Triangle", "Square"];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your business's three-letter acronym?",
      name: "acronym",
      validate: async (input) => {
        if (!input) {
          return "Please enter an acronym.";
        } else if (input.length > 3 || input.length < 3) {
          return "Your acronym must be exactly 3 characters.";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What color would you like your logo's text to be?",
      name: "textColor",
      validate: async (input) => {
        if (!input) {
          return "Please enter a color";
        }
        return true;
      },
    },
    {
      type: "list",
      message: "What shape would you like your logo to be?",
      name: "shape",
      choices: shapesList,
    },
    {
      type: "input",
      message: "What color would you like the shape's color to be?",
      name: "shapeColor",
      validate: async (input) => {
        if (!input) {
          return "Please enter a color";
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    let userShape;
    const acronym = answers.acronym.toUpperCase();
    const textColor = answers.textColor.toLowerCase();
    const shapeColor = answers.shapeColor.toLowerCase();

    if (answers.shape === "Circle") {
      userShape = new Circle(shapeColor, acronym);
    } else if (answers.shape === "Triangle") {
      userShape = new Triangle(shapeColor, acronym);
    } else {
      userShape = new Square(shapeColor, acronym);
    }

    return writeFile(`./logos/${acronym}.svg`, userShape.render());
  })
  .then(() => console.log("File created!"))
  .catch((error) => {
    console.log(error);
  });
