/////Function Declarations
function greet(firstName = 'John', lastName = 'Doe') {
/*     if(typeof firstName === 'undefined'){firstName='John'};
    if(typeof lastName === 'undefined'){lastName='Doe'}; */
//    console.log('Hello');
    return `Hello, ${firstName} ${lastName}.`;
}
// console.log(greet('John', 'Smith'));

/////Function Expressions
const square = function(x) {
    return x * x;
};
// console.log(square(8));

///// Immediately Invokable Function Expressions - IIFEs
/* (function(){
    console.log('IIFE Ran ...');
})(); */

/* (function(name){
    console.log(`Hello, ${name}`);
})('Brad'); */

/////Property Methods
const toDo = {
    add: function(){
        console.log('Add todo ...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

toDo.delete = function(){
    console.log('Delete todo ...');
}
toDo.add();
toDo.edit(22);
toDo.delte();