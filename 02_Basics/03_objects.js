//singaltion
//object.create

//Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Rana",
    "full name": "Indian Rana",
   [mySym]: "mykey1",
    age:20,
    location: "Saharanpur",
    email: "Indianrana007@gmail.com",
    isLoggedIn: false,
    lasLoginDays:["Monday","Friday"]

}

//console.log(JsUser.email);    //not good
//console.log(JsUser["full name"]); //good sentex
//console.log( JsUser[mySym]);

JsUser.email = "Rana@gmail.com"


//Object.freeze(JsUser)
JsUser.email = "ac@gmail.com"

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
    
}
JsUser.greetingtwo = function(){
    console.log(`Hello js user,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
