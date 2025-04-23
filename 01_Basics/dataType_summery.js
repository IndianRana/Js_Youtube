// There are two types of DataType 1)primitive,  2)Non-Primitive

//primitive : 
//7 types: String, Number, Boolean, null, undefined, symbol, bigint


//Feference(Non-primitive)
// Array,Objects,Function

//Q. Is js is static or Dynamic

const score = 100  //Number datatype
const Name = "Rana" //string datatype
const scoreValue = 100.34 //number datatype
const isLoggedIn = true  //boolean datatype
const outsideTemp = null  //null datatype
let userEmail;   //undefined datatype

const id = Symbol("123")  
const anotherId = Symbol("123")
console.log(id === anotherId);  // symbol is not equel
const bigNumber = 13247263424827429n   //this is big number

console.log(typeof bigNumber);



const hero = ["Ram", "sita", "Hanuman"]   //Arrya dataType

let myObj = {        //in{} is obj 
    name:"Ram",
    age:22,
}


const myFunction = function(){     // function store in variable "myFunction"

    console.log("hello");
    
}

console.log(typeof myFunction);   //function  in doc call function object
console.log(typeof myObj);   //Object
console.log(typeof her0);   //Object





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//    Stack(primitive)          heap(Non-primitive)

//stack => give copy
//heap => reference orignal value

let myYouTube = "Reel4U"
let anotherName = myYouTube  // give reference
console.log(anotherName);   //  take value
anotherName = "The-World"   // change value

console.log(anotherName);    //value is change
console.log(myYouTube);      //but not change main value



let userOne ={
    email:"indianrana007@gmail.com",
    upi: "upi@sbi",

}

let userTwo = userOne                  //take value to userOne
userTwo.email = "abc@gameCounter.com"   //change value of userTwo
console.log(userOne.email);             //value is change of userOne
console.log(userTwo.email);
