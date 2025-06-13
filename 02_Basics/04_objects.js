//const tinder = new Object()
const tinder ={}

tinder.id = "23hns"
tinder.name = "indian"
tinder.LoggedIn = false
//console.log(tinder);

const regularUser = {               //nesting in object
    email: "indianrana@gmail.com",
    fullname:{
        userfullname:{
            firstname:"indian",
            Lastname:"rana"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1 , obj2}   // its take object as a element

//const obj3 = Object.assign({},obj1,obj2)  // for joint values,{} use for obj1 ==! obj3


const  obj3 = {...obj1, ...obj2}   //best method
//console.log(obj3);

const user = [
    {
        id: 1,
        email: "Aditya@gmail.com",
    },
    {

    }

]

user[1].email

console.log(tinder);
console.log(Object.keys(tinder));   // acces key
console.log(Object.values(tinder)); //acces values

console.log(Object.entries(tinder));  //take entries

console.log(tinder.hasOwnProperty('id'));  // check key entries in t&f


const course = {
    cousreName: "Js in hindi",
    price: 999,
    instructer: "Hitesh"
}

//course.instructer  // avoide this repetion
const {instructer:id} = course    // for derict access the key
console.log(id);




//{
//    name:"Aditya",         
 //   coursename:"Js in hindi",
 //   price: "999"
//}




