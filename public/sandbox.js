"use strict";
// type StringOrNum = string | number;
// let greet: Function;
// greet = () => {
//     console.log('Hello', 'World');
// }
// greet();
// let add = (a: number, b: number) => {
//     console.log(a+b);
// }
// add(1, 2);
// let myNum: Function;
// myNum = (a: number, b: number, c: StringOrNum=10) => {
//     console.log(a+b)
//     console.log(c);
// }
// myNum(3, 4, 20)
let greet;
greet = (myName, myGreetings) => {
    console.log('${myName} says ${myGreetings}');
    // console.log(myName ,"says " + myGreetings);
};
greet('Derrick', 'Hi');
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
