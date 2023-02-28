// 2.1

alert('Я JavaScript!')

// 2.4

let admin
let userName = 'Джон'
admin = userName
alert(admin)

//----------

let planetName = 'Земля'
let currentUser = 'Имя'

//----------

const BIRTHDAY = '18.04.1982';

// 2.5

let name = "Ilya";

alert(`hello ${1}`); // hello 1

alert(`hello ${"name"}`); // hello name

alert(`hello ${name}`); // hello Ilya

// 2.6 

let name2 = prompt('Как тебя зовут?', '');

alert(`Тебя зовут ${name2}!`);

// 2.8

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

//--------
let r = 2;

let x = 1 + (r *= 2);

//r = 4
//x = 5

//---------
"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
"  -9  " + 5 //-9 5
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //NaN
" \t \n" - 2 //-2

//----------
let e = Number(prompt("Первое число?", 1));
let v = Number(prompt("Второе число?", 2));

alert(e + v);

//2.9

5 > 4 //true
"ананас" > "яблоко"//false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false

// 2.10

//------
if ("0") {
    alert('Привет');
} // да выведется

//--------
let answer = prompt('Какое «официальное» название JavaScript?', '');

let message = (answer === 'ECMAScript') ? 'Верно!' : 'Не знаете? “ECMAScript”!'

alert(message);

//---------
let answerNumber = Number(prompt('Введите число', 1));

let getNum = (answerNumber > 0) ? '1' :
    (answerNumber < 0) ? '-1' :
        (answerNumber === 0) ? '0' : ''

alert(getNum);

//--------
let result = (a + b < 4) ? 'Мало' : 'Много';

//---------

let message2 = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';


// 2.11

//-------
alert(null || 2 || undefined); //2

//--------
alert(alert(1) || 2 || alert(3)); //1, 2

//-------
alert(1 && null && 2); // null

//-------
alert(alert(1) && alert(2)); //1, undefined

//-------
alert(null || 2 && 3 || 4); //3

//---------
if (age >= 14 && age <= 90)

    //-------
    if (age < 14 || age > 90)

        //-------
        if (-1 || 0) alert('first'); //+
if (-1 && 0) alert('second'); //-
if (null || -1 && 1) alert('third'); //+

//9

let userName2 = prompt("Введите ваше имя", '');

if (userName2 === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass === '' || pass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userName2 === '' || userName2 === null) {
    alert('Отменено');
} else {
    alert("Я вас не знаю");
}

// 2.13

//1
let i = 3;

while (i) {
    alert(i--);
} // alert 3, alert 2, alert 1

//2
let j = 0;
while (++j < 5) alert(j); //1 2 3 4

let h = 0;
while (h++ < 5) alert(h); // 1 2 3 4 5

//3

for (let i = 0; i < 5; i++) alert(i); //0 1 2 3 4 

for (let i = 0; i < 5; ++i) alert(i); // 0 1 2 3 4

//4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}

//5
let num
do {
    num = prompt('Введите число больше 100', 0)
} while (num <= 100 && num)

//7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}

//2.14

if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
    alert('Okay we support these browsers too')
} else {
    alert('We hope that this page looks ok!');
}

//2
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

// 2.15

//1

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}
// одинаково

//2

function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?')
}

//3
function min(a, b) {
    return a < b ? a : b;
}

//4
function pow(x, n) {
    let res = x;
    for (let i = 1; i < n; i++) {
        res *= x;
    }
    return res;
}

let x1 = prompt("x?", '');
let n1 = prompt("n?", '');

(n1 < 1) ? alert(`Степень ${n} не поддерживается, используйте натуральное число`) : alert(pow(x1, n1));


// 2.17

const ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);