const name = "Indian"
const repoCount = 50

console.log(name + repoCount + "value");   // Not prefer
console.log(`hello my name is ${name} and repo count is ${repoCount}`);  // it is good

const gameName = new String("In dia nir")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toupperCase);
console.log(gameName.at(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(3,4)
console.log(newString);

const newstringOne = "   hitesh   "
console.log(newstringOne);
console.log(newstringOne.trim());   //remove spaces


const url = "https://abs.com/hitesh%20choudry"

console.log(url.replace('%20',"_"));  // replace the value
console.log(url.includes("com"));  // check the include value

console.log(gameName.split(","));












