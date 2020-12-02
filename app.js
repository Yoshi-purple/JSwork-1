/** @format */
"use strict";

{
  let fizz = 0;
  let buzz = 0;
  let fizzbuzz = 0;
  for (let i = 0; i < 99; i++) {
    fizz++;
    buzz++;
    fizzbuzz++;
    if (fizz % 15 === 0) {
      console.log("FizzBuzz " + fizzbuzz);
    } else if (buzz % 3 === 0) {
      console.log("Fizz " + fizz);
    } else if (buzz % 5 === 0) {
      console.log("Buzz " + buzz);
    }
  }
}
