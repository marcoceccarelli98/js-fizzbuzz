'use strict'

for (let i = 1; i <= 100; i++) {

    let outValue = i.toString();

    if ((i % 3 == 0) && (i % 5 == 0)) {
        outValue = "FizzBuzz";
    } else if (i % 3 == 0) {
        outValue = "Fizz";
    } else if (i % 5 == 0) {
        outValue = "Buzz";
    }

    console.log(outValue);
}