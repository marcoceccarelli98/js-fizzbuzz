'use strict'

const ul = document.querySelector('ul.list');

//create a for cicle from 1 to 100
for (let i = 1; i <= 100; i++) {

    const li = document.createElement("li");

    let outValue = i.toString();

    //check if the number is divisible by 3 and 5 and if true print FizzBuzz
    if ((i % 3 == 0) && (i % 5 == 0)) {
        outValue = "FizzBuzz";
        li.classList.add('fizzbuzz');
    } else if (i % 3 == 0) { //check if the number is divisible by 3 and if true print Fizz
        outValue = "Fizz";
        li.classList.add('fizz');
    } else if (i % 5 == 0) {//check if the number is divisible by 5 and if true print Buzz
        outValue = "Buzz";
        li.classList.add('buzz');
    }

    li.append(outValue);

    ul.append(li);

}




