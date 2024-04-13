const inquirer = require("inquirer");
const { readFile, writeFile } = require("fs/promises");

const shapesList = ["circle", "triangle", "square"];

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
    return writeFile(`./logos/${answers.name}.svg`, "I'm a file!");
  })
  .then(() => console.log("File created!"));
