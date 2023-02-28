// 4.1 

//1
const user = {
    name: 'John',
    surname: 'Smith',
}
user.name = 'Pete'
delete user.name

//2
let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
//3
const userName = {
    name: "John"
};

userName.name = "Pete"; //да будет работать

//4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

//5
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
    return obj
}

console.log(multiplyNumeric(menu));

// 4.4

//1
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
let user = makeUser();

console.log(user.ref.name); // ошибка

//2
let calculator = {
    read() {
        this.a = +prompt('Первое число', 0);
        this.b = +prompt('Второе число', 0);
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//3
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep(); 

  // 4.5

  //1
let obj = {};
function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() );

//2
function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator2= new Calculator();
calculator2.read();

console.log( "Sum=" + calculator2.sum() );
console.log( "Mul=" + calculator2.mul() );

//3

function Accumulator(startingValue) {
this.value = startingValue
this.read = function() {
    this.value += prompt('Введите число', 0)
}
}
let accumulator = new Accumulator(1); 

accumulator.read(); 

console.log(accumulator.value); 