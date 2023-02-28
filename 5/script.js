// 5.2

//1
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

console.log(a + b);

//2
console.log(Math.round(6.35 * 10) / 10);

//3
function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return +num;
}
//4
let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) console.log(i);
}

//5
function random(min, max) {
    return min + Math.random() * (max - min)
}

console.log(random(2, 5));

//6
function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

console.log(randomInteger(2, 5));

// 5.3

//1
function ucFirst(str) {
    if (str) return str[0].toUpperCase() + str.slice(1)
}
console.log(ucFirst('cаша'));

//2
function checkSpam(str) {
    let newStr = str.toLowerCase()
    return newStr.includes('viagra') || newStr.includes('xxx')
}
console.log(checkSpam('buy ViAgra'));
console.log(checkSpam("innocent rabbit"));

//3
function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

//4
function extractCurrencyValue(str) {
    return +str.slice(1)
}

console.log(extractCurrencyValue('$120'));

// 5.4

//1
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

console.log(fruits.length);// 4
//2
let styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
styles[Math.floor((styles.length - 1) / 2)] = "Классика"
console.log(styles.shift());
styles[Math.floor((styles.length - 1) / 2)] = "Классика"
console.log(styles);


//3
let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
});

arr[2](); //a, b, function()

//4
function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(sumInput())

//5
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 3, 5, -3]));

// 5.5

//1
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

console.log(camelize('my-short-string'));

//2
function filterRange(arr, a, b) {
    return arr.filter(item => a <= item && item <= b);
}

let arr11 = [5, 3, 8, 1];
let filtered = filterRange(arr11, 1, 4);

console.log(filtered);

//3

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }

}
let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4);
console.log(arr);

//4
let arr3 = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

console.log(arr3);

//5
function copySorted(arr) {
    return arr.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);

//6

function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

//7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

console.log(names);

//8
let vasyaPupkin = { name: "Вася", surname: "Пупкин", id: 1 };
let petyaIvanov = { name: "Петя", surname: "Иванов", id: 2 };
let mashaPetrova = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [vasyaPupkin, petyaIvanov, mashaPetrova];

let usersMapped = users2.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

//9
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
let arr5 = [vasya, petya, masha];

sortByAge(arr5);

//10
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

//11
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let arr6 = [vasya, petya, masha];

console.log(getAverageAge(arr6));

//12
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));

//13
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

// 5.7

//1
function unique(arr) {
    return Array.from(new Set(arr));
}

//2
function aclean(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        obj[sorted] = arr[i];
    }
    return Object.values(obj);
}

let arr22 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr22));

//3

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");

//5.8

//1
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakSet();

//2

let messages2 = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();


// 5.9

//1
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

//2
function count(obj) {
    return Object.keys(obj).length;
}

// 5.10

//1
let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;

//2
function topSalary(salaries) {

    let max = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

// 5.11

//1
let date = new Date(2012, 1, 20, 3, 12);
console.log(); (date);

//2
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

let date2 = new Date(2023, 0, 3);
console.log(); (getWeekDay(date2));

//3
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
      day = 7;
    }
    return day;
  }

  //4

  function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date5 = new Date(2015, 0, 2);

  //5
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  //6
  function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today; 
    return Math.round(diff / 1000); 
  }

  //7
  function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
  }

  //8
  function formatDate(date) {
    let diff = new Date() - date; 
  
    if (diff < 1000) { 
      return 'прямо сейчас';
    }
  
    let sec = Math.floor(diff / 1000); 
  
    if (sec < 60) {
      return sec + ' сек. назад';
    }
  
    let min = Math.floor(diff / 60000); 
    if (min < 60) {
      return min + ' мин. назад';
    }

    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); 
  
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }

// 5.12

//1
let userMain = {
    name: "Василий Иванович",
    age: 35
  };
  
  let user2 = JSON.parse(JSON.stringify(userMain));

//2
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));