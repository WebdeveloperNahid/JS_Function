//Task-4
//**/Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
//

function count_zero(binaryString) {
    let size = binaryString.length;
    let count = 0;
    for (let i =0; i < binaryString.length; i++) {
        let binary = binaryString[i];
        if (binary =="0") {
            count++;
        }
    }
    return count;
    

};

let binaryNamber = "101001010000100";
let reasult = count_zero(binaryNamber);
console.log("there are 0 is have this string binary has ===", reasult);
