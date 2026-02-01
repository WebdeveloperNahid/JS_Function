
//*Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
//*

function odd_even(number) {
        if(number % 2 === 0){
            return "even";
        }else {
            return "odd";
        }
    };

let number = 20;
let num = 15;
let reasult = odd_even(number);
let reasult2 = odd_even(num);
console.log("number = 20 --->>", reasult," | " ,"number = 15 --->>", reasult2);