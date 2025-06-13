// var c = 400
let a = 300

if(true){
    let a = 20
    const b = 30
    var c = 40      //kya matlab har janga tang ada rha hai
    console.log("Inner:",a)
}

// console.log(a);
// console.log(b);
// console.log(c);
 


function one() {
    const username = "Aditya"

    function two() {
        const website = "chai aur code"
        console.log(username)
    }
    // console.log(website);
    
    // two()
}

one()

if(true){
    const username = "Aditya"

    if(username == "Aditya"){
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website);
    
}
// console.log(username);




// +++++++++++++++++++++++++++++++++++++++Hoisting

console.log(AddOne(5))              //access 'AddOne' before initialization
function AddOne(num){
    return num + 1
}

AddTwo(5)                            // Cannot access 'AddTwo' before initialization
const AddTwo = function(num){
    return num + 2
}

