const userEmail = []

if(userEmail){
    console.log("Got email id");
    
}else
{
    console.log("don't get email");
    
}

// falsy value
//false, o, -0, BigInt 0n, null, "" undefined, NaN

// truthy value
// "0" ,'false' ," ", [], { }, function() 

// if(userEmail.length == 0)
// {
//     console.log("Array is empty");
    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length == 0){
//     console.log("object is empty");
    
// }

// Nullish coalescing operator (??) ; Null Undefined

let vel1
// vel1 = 5 ?? 10
// vel1 = null ?? 10
// vel1 = null ?? 10 ?? 20
vel1 = undefined ?? 10

console.log(vel1);
// terniary operator

// condition ? true : false

let coffeprice = 100
coffeprice >= 80 ? console.log("more then 80") : console.log("less then 100");




