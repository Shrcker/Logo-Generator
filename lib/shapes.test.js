const shape = require("./shape.js");
const { Triangle, Circle, Square } = shape;
const triangle = new Triangle("blue", "SVG");
const circle = new Circle("red", "SVG");
const square = new Square("yellow", "SVG");

describe("Shape sublcasses", () => {
  test("If the triangle object is outputting correct data", () => {
    expect(triangle.render()).toEqual(`
    <svg version="1.1" width="300" height="200">
      <polygon points="150 0, 300 200, 0 200" fill="blue" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>
    `);
  });
  test("If the circle object is outputting correct data", () => {
    expect(circle.render()).toEqual(`
    <svg version="1.1" width="300" height="200">
      <circle cx="150" cy="100" r="100" fill="red" />
      <text x="150" y="110" font-size="50" text-anchor="middle" fill="white">SVG</text>
    </svg>
    `);
  });
  test("If the square object is outputting correct data", () => {
    expect(square.render()).toEqual(`
    <svg version="1.1" width="300" height="200">
      <rect x="75" y="0" 
        width="200" height="200" fill="yellow" />
      <text x="175" y="120" font-size="70" text-anchor="middle" fill="white">SVG</text>
    </svg>
    `);
  });
});
