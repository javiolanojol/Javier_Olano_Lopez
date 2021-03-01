'use strict';
// Si n es multiplo de 3 Fizz
// Si n es multiplo de 5 Buzz
// Si n es multiplo de los dos FizzBuzz



//Switch

for (let i = 1; i <= 100; i++) {

    console.log(i);

    switch (i%3) {
        case 0:
            console.log("Fizz");
            break;
    }

    switch (i%5) {
        case 0:
            console.log("Buzz");
            break;
    }
    
}




