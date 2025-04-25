const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance.toString());  //change number to string

console.log(balance.toFixed(3));   // fix value or limit

const otherNumber = 23.65876
console.log(otherNumber.toPrecision(2));  //for aprox value

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN'));


// +++++++++++++++++++++++  Maths  ++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));  // for abslute valu change sign
console.log(Math.round(4.55));  // for round of the value
console.log(Math.ceil(5.36))    // give the high value in round
console.log(Math.floor(3.65));  // give the low valu in round
console.log(Math.min(2,5,7,1,4,4,3,8));  //find min. value
console.log(Math.max(2,5,7,12,4,4,3,8));    //find the max.value

console.log(Math.random());
console.log((Math.random()*10)+1);  //find random number

const max =20
const min = 10

console.log(Math.random()*(max-min+1)+min);






