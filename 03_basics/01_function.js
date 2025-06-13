


function sayMyNmae(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
}

//sayMyNmae()

// function addTwoNum(num1,num2){          //function inislijestin,parameter
//     console.log(num1 + num2);
// }
function addTwoNum(num1,num2){          //function inislijestin,parameter
    
    // let result = num1 + num2
    // return result
    //return num1 + num2
}

addTwoNum(2,"a")      //Function exicution, argument


const result = addTwoNum(2,5)
//console.log("result:", result);


function LoginUser(username){
    if(username === undefined){
        console.log("please enter your name");
         
    }
   return `${username} just logged in`
}

//console.log(LoginUser("Rana"))
//console.log(LoginUser("rana"))


function calculateCartPrice(vol1,vol2,...num1) {              // . . . is rest operator use for combine
    return num1
}

// console.log(calculateCartPrice(2 ,200 ,300 ,400 ,600))


const user = {
    username: "Aditya",
    price: "300"
}


function handlObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
    

}

//handlObject(user)

handlObject({username: "sam",
    price: "300",
})


let MyNewArray = [200,300,400,500,600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(MyNewArray))
console.log(returnSecondValue([200,300,600,500,200]))

