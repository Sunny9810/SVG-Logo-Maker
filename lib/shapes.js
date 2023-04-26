class Shape {
    constructor() {
      this.color = '';
    }
    
    setColor(color) {
      this.color = color;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" height="200" width="200" fill="${this.color}"/>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="150" r="100" fill="${this.color}"/>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="100,50 200,200 0,200" fill="${this.color}"/>`;
    }
  }
  

module.exports = {Circle,Square,Triangle}

