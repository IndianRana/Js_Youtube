// IIFE  ==> immediately Invoked Function Expressions

// for remover Global scope {variable} polution

(function chai()
{
    console.log(`DB connected`);
    
})();

(  (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Aditya')