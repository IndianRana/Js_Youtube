const accountId = 144523     //never changes
let   accountEmail = "Indianrana@gmail.com"
var accountPassword = "123456"    //prefer not to use var bcz of issue in block scope or function scopr
accountCity = "Saharanpur"

//accountId = 234   // Not allow ,assignment to constant variable

accountEmail = "ABC@gmail.com"
accountPassword = "112233"
accountCity = "Gangho"

console.log(accountId)
console.table([accountEmail, accountId, accountPassword, accountCity])
