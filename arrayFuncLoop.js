//A simple function loop, that takes an array as input and prints the value of the array to the consolelet message = 'This is a text outside a function block';

function students(firstName) {
    for (let i = 0; i < firstName.length; i++) {
        console.log (firstName[i]);
    };
};
const newData = ["Ayobami", "Success", "Joy", "Oluwaseun"];
students(newData);