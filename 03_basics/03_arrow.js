const user = {
    username: "aditya",
    price: 200,
    welcomeMessage:  function(){
    console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Aditya"
//     console.log(this.username);         //only use in object not function
    
// }
// chai()


// const chai = function(){
//     let username = "Aditya"
//         console.log(this.username);
// }


// const chai = () => {
//     let username = "Aditya"
//         console.log(this.username);
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

console.log(addTwo(2,4));
