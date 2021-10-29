console.log('Function started');


// Basic function
function myStart() { 
    console.log('basic function');
}

myStart()


//function statrted

function myFun(FirstName, LastName, age){
    return 'My First Name is ' + FirstName + 'and Last Name is '+ LastName +  age
}

const funCall = myFun('Beulah', 'simeon', 25 )

console.log(funCall);


// add two function

function add(x, y){
    return sum = x + y  
}

 add(10,30)

console.log( 'Result is ',sum);


// Another type
function minusFun(a , b) {
    return minus = a-b
}

let reuslt = minusFun(10, 5);

console.log('Your second result', reuslt);


// Function conditions

function condi(name, age){

    if(name, age){
        return 'your name is ' + name + 'and your age is ' + age
    } else {
        return 'Enter your correct name'
    }
    console.log('Name and age is perfect');
}

let resultCod = condi('simeon', 26)

console.log(resultCod);


// function duplcate

function dupFun1(name, age) {
    return document.write('<h1>'+'Your name is '+ name + ' & Your age is '+ age)

}

dupFun1('Simeon', 32)

function dupFun1(name, age) {
    return document.write('<h1>'+'Your name is '+ name + ' & Your age is '+ age)

}
dupFun1('Beulah', 27)

function duplicate() {
    console.log('Am a original');
}
duplicate()

function duplicate(message) {
    //console.log(message);
    console.log('second Original');
}

duplicate('I am second')