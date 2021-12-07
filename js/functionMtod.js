function add(numA, numB){
    return numA+numB
}
var result = add(4,6)
console.log('Your result is =', result);

var addFun = (num1, num2)=>{
    return num1+num2
}

console.log('add fun is ' ,addFun(4,5));

var newFun = addFun

console.log('new Function is ', newFun(5,5));

// function callNewFun (funName , parMet) {
//     return funName(parMet)
// }

// callNewFun(alert, 'function Name')

//function expression 

var funhit = function(numX) {
    return numX * 3
}

console.log(funhit(6));

var newArg = function(){
    console.log(arguments);
}
console.log('Arguments', newArg(1,2,3));

// using reduce method

var newArgA = function(){
    return Arrayfrom(arguments).reduce(function(accum, currentval){
        return accum + currentval;
    });
};

console.log(newArgA(1,3,5));