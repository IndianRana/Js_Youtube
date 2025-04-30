// Array -->storing a collection of mulltiple items under a single variabl name

// 1. resizable and contain a mix of different dataTypes
//2 zero base indexed
//3 use shall copy and deep copy


const myArr = [0,1,2,3,4,5,]     // Array initialization
const myHeors = ["Ram","Hanuman"]

const myArr2 = new Array(1,2,3,4,5)   //Array initialization
//console.log(myArr[2]);


//Array methods

myArr.push(6)    //use for insert a value in last
myArr.push(7)   
myArr.pop()     //use for delete last value,no argumet use

myArr.unshift(4) //use for insert a value in first
myArr.shift() //use for remove a value in first

//console.log(myArr.includes(9));  //find value, give ans. in bollean
//console.log(myArr.indexOf(4));  //find the index no.

const newArr = myArr.join()  //joint the array and covert string

//console.log( newArr);
//console.log(myArr);


// slice and splice

const myn1 = myArr.slice(1,3) //it take the value 1 to 3 and not include value 3, not change the Array
console.log("A " + myn1);

//console.log(myArr);

const myn2 = myArr.splice(1,3)  //it take the value 1 to 3 and  include value 3. it  change the Array by cut the value
console.log("B " + myn2);

//console.log(myArr);