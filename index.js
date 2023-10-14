"use strict";
// Check Number is Even or odd , use func
function isEven(a) {
    return a % 2 === 0;
}
console.log("Number is  : ", isEven(5));
//Bigint
let bigNumber = 12345678456789456789n; // bigint define method 1
// let otherBigNumber:bigint = 99876541234567823455n;
let otherBigNumber = BigInt("99876541234567823455"); // Bigint define method 2
console.log("bigNumber is : ", bigNumber);
console.log("otherBigNumber is : ", otherBigNumber);
let sum = bigNumber + otherBigNumber;
console.log("sum is = ", sum);
let difference = bigNumber - otherBigNumber;
console.log("difference is = ", difference);
let product = bigNumber * otherBigNumber;
console.log("product is = ", product);
let division = bigNumber / otherBigNumber;
console.log("division is = ", division);
