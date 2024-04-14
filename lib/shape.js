class Shape {
  constructor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }
  render() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
  }
  render() {
    return `
    <svg version="1.1" width="300" height="200">
      <circle cx="150" cy="100" r="100" fill="${this.color}" />
      <text x="150" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
  }
}

class Triangle extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
  }
  render() {
    return `
    <svg version="1.1" width="300" height="200">
      <polygon points="150 0, 300 200, 0 200" fill="${this.color}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
  }
}

class Square extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
  }
  render() {
    return `
    <svg version="1.1" width="300" height="200">
      <rect x="75" y="0" 
        width="200" height="200" fill="${this.color}" />
      <text x="175" y="120" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
  }
}

module.exports = {
  Shape: Shape,
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
};
