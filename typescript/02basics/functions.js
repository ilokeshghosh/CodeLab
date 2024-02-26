"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return 'hello'
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(7);
getUpper('lokesh');
signUpUser('lokesh', 'ghoshlokesh@gmail.com', false);
loginUser('lokesh', 'lokesh@gmail.com');
var getHello = function (s) {
    return '';
};
var heros = ['thor', 'batman', 'hulk'];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return 2
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
