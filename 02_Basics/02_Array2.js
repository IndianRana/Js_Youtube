const marvelHeros = ["thore","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvelHeros.push(dc_heros)  //push an array in array in single value

//console.log(marvelHeros);
//console.log(marvelHeros[3][1]);

const allheros = marvelHeros.concat(dc_heros) // give new array with push,not changes in frist array
console.log(allheros);

const all_new_heros = [...marvelHeros,...dc_heros]  //spread the value of Array
console.log(all_new_heros);

const anotherArr = [2,4,5,6,[5,6],7,[,8,9,[6,7]]]

const new_anotherArr = anotherArr.flat(Infinity)

console.log(new_anotherArr);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Aditya"}));  //intresting point

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


