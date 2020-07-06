// FUNCTION DECLARATIONS

function greet(firstName = 'Angelique', lastName = 'Abacajan'){
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}
    //console.log('Hello');
    return 'Hello' + firstName + '' + lastName;
}

// console.log(greet());

const square = function(x = 3) {
    return x*x;
};

console.log(square);

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function() {
//     console.log('IIFE Ran..');
// })();

// (function(name){
//     console.log('Hello' + name);
// }) (Brad);

const todo = {
    add: function() {
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();