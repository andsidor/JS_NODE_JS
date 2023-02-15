// Euler problem 2 in JS
const max = 400000;

let prev = 0;
let curr = 1;
let next;

let suma = 0;

while(curr < max){
    next = prev + curr;
    prev = curr;
    curr = next;
    if (curr% 2 === 0){
        suma += curr;

    } 
}

console.log("Suma przystych Fib = "+ suma)