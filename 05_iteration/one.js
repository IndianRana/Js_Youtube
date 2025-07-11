//For

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}

// console.log(element);

for (let i = 1; i <=10 ; i++) {
    // console.log(`outer loop ${i}`);
        for (let j = 1; j <=10 ; j++) {
            const element = j;
            // console.log(`inner loop ${j} outer loop${i}`);
            //console.log(`${i} * ${j} = ${i*j}`);
            
        }

    
}

const myArray = ["Sakshi","Aditya","Raj"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// Break and Continue

for (let index = 0; index < 20; index++) {
    const element = index;
    if(index == 5){
        // console.log(`detect ${index}`);
        break
    }
    // console.log(`index is ${element}`);
    
}


for (let index = 0; index < 20; index++) {
    const element = index;
    if(index == 5){
        console.log(`detect ${index}`);
        continue
    }
    console.log(`index is ${element}`);
    
}


