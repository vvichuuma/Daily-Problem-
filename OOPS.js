console.log("This is the OOPS excercise : ");

//creating a constructor:
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype = {
  getInfo: function() {
    return `Hey my first name is ${this.firstName} and my last name is ${
      this.lastName
    }`;
  }
};

//Creating an object / instance:
var vish = new Person("Vishnu", "Umakanthan");
console.log(vish.getInfo());
var pete = new Person("Peter", "Jang");
console.log(pete.getInfo());

// 2). Calculate the area of rectangle:

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype = {
  Area: function() {
    var cal = this.width * this.height;
    return `Hey the area is ${cal}`;
  }
};

var r1 = new Rectangle(10, 30);
console.log(r1.Area());
