const myArray = [1,2,3,4,5]

const initionVal = 0;

// const sumOfArray = myArray.reduce( (acu,curval) => {
//     console.log(`acu: ${acu} and curval: ${curval}`);
    
//     return acu + curval
// },0 )

const sumOfArray = myArray.reduce( (acu,curval) => acu+curval,0 )

console.log(sumOfArray);
