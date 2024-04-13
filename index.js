const inquirer = require("inquirer");
const { readFile, writeFile } = require("fs/promises");
const Circle = require("./lib/shape").Circle;
const Triangle = require("./lib/shape").Triangle;
const Rectangle = require("./lib/shape").Rectangle;

const shapesList = [Circle, "Triangle", "Square"];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your business's three-letter acronym?",
      name: "name",
      validate: async (input) => {
        if (input.length > 3 || input.length < 3) {
          return "Your acronym must be exactly 3 characters.";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What color would you like your logo's text to be?",
      name: "textColor",
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
    },
  ])
  .then((answers) => {
    const userShape = new Circle(answers.color, answers.name);
    return writeFile(`./logos/${answers.name}.svg`, userShape.render());
  })
  .then(() => console.log("File created!"))
  .catch((error) => {
    console.log(error);
  });
