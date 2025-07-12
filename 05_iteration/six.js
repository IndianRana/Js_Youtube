const coding = ["jds", "ruby", "c++", "python", "java", "cpp"]


// const value = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(value);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.filter( (num) => {
//    return num > 5                                  //if we use {} write "return" compulsory otherwise Not
// })

// console.log(newNums);   

// const newNum = []

// myNum.forEach( (num) => {          // use forEach ya filter s you wish
//     if (num > 5) {
//         newNum.push(num);  // push in new array
        
//     }
// })

// console.log(newNum); 


const book = [
    {title: "one", genre: "fiction", publish: 1981, edition: 2004 },
    {title: "two", genre: "non-fiction", publish: 1992, edition: 2008 },
    {title: "three", genre: "History", publish: 1999, edition: 2007 },
    {title: "four", genre: "Non-fiction", publish: 1989, edition: 20010 },
    {title: "five", genre: "Science", publish: 2009, edition: 2014 },
    {title: "six", genre: "fiction", publish: 1987, edition: 2010 },
    {title: "seven", genre: "History", publish: 1986, edition: 1994 },
    {title: "eight", genre: "Science", publish: 2011, edition: 2016 },
    {title: "nine", genre: "Non-fiction", publish: 1981, edition: 1989 },
]


let userBook = book.filter( (bk) => bk.genre == "History");

userBook = book.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre == "History"} )

console.log(userBook);
