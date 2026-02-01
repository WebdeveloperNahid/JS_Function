// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiplyNumbers(num1, num2, num3, num4) {
  let multi_numbers = num1 * num2 * num3 * num4;
  return multi_numbers;
}

// let numbers = [2,4,5,7]; vul*

let output = multiplyNumbers(2, 4, 5, 7);
console.log("Multiply the four numbers", output);

//terminal: output = 280

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function EvenOdd(number) {
  if (number % 2 === 1) {
    let odd = number * 2;
    return odd;
  } else {
    let even = number / 2;
    return even;
  }
}

let result = EvenOdd(10);
let result2 = EvenOdd(7);
console.log(
  "this is odd*2 result == ",
  result2,
  "& thats even/2 result ==",
  result,
);

/**
 * this is odd*2 result ==  14 & thats even/2 result == 5
 */

/**
 * 
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
{
  function make_avg(anyArry) {
    let sum = 0;
    for (let arr of anyArry) {
      sum = sum + arr;
    }

    let size = anyArry.length;
    console.log("anyArry er length = ", size);
    //anyArry er length =  6

    return sum / size;
  }

  let arry = [10, 20, 30, 40, 50, 60];

  let reasult = make_avg(arry);
  console.log("solved; return the avareg valu === ", reasult);
}
// solved; return the avareg valu ===  35

//way 2 ---->>>#$@$$#@$@#$@

function make_avg(xArry) {
  let size = xArry.length;
  console.log("way 2 length for loop way", size);
  let sum = 0;
  for (let i = 0; i < xArry.length; i++) {
    sum = sum + xArry[i];
  }
  return sum / size;
}

let arry = [10, 20, 30, 40, 50, 60];

let reasult = make_avg(arry);
console.log("solved; return the avareg valu === ", reasult);
