const {Circle, Square, Triangle} = require("./shapes.js")

//test if all 3 objects can be render correctly

//Circle Shape

describe('Circle', () => {
    test('renders correctly', () => {
      const circle = new Circle();
      circle.setColor('green');
      expect(circle.render()).toEqual('<circle cx="150" cy="150" r="100" fill="green"/>');
    });
  });

  //Square Shape

  describe('Square', () => {
    test('renders correctly', () => {
      const shape = new Square();
      shape.setColor('yellow');
      expect(shape.render()).toEqual('<rect x="50" y="50" height="200" width="200" fill="yellow"/>');
    });
  });
  
  //Triangle Shape

  describe('Triangle', () => {
    test('renders correctly' , () => {
        const shape = new Triangle();
        shape.setColor('brown');
        expect(shape.render()).toEqual('<polygon points="100,50 200,200 0,200" fill="brown"/>')
    });
  });
