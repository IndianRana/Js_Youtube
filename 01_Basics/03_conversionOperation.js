let score = "Rana"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)  // change score variables in number

console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=>33, "33abc"=>NaN, true=>1/false=>0, String=>NaN

let isLoggedIn = "hey"
let bolleanIsLoggedIn = Boolean(isLoggedIn)  //change isLoggedIn variable in Boolean
console.log( bolleanIsLoggedIn);

//1 => true
//0 => false
//"" => false
//"hey" =>true

let someNumber = 33
let stringNumber = String(someNumber) //change someNumber variable in string
console.log(someNumber);
console.log(typeof someNumber);

//****************Operations**************

let value = 3
let negvalue = -value

console.log(negvalue);

//console.log(2 + 2);
//console.log(2 - 2);
//console.log(2 * 2);
//console.log(2 ** 2);
//console.log(2 / 2);
//console.log(2 % 2);

let str1 = "hello"
let str2 = " Indian"
let str3 = str1 +str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//console.log(13 + 4 * 5 % 3);  //not apreset

console.log(+false);
console.log(+"hey"); //NaN
console.log(+""); // 0

// Postfix  X++, returns the value before incrementing.
//Prefix    ++X, returns the value after incrementing.

let num1, num2, num3
num1 = num2 = num3 = 2 + 2    //not Apreset

let gameCounter = 100
gameCounter++
console.log(gameCounter);










