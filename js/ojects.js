const obj = new Object()

obj.name = 'Simeon'
obj.age = 28

console.log(obj instanceof Object);

console.log(obj.name);
console.log(obj.age);

var sayHi = function() {
    console.log('Your name is ' + obj.name);

    if(obj.age >50) {
        console.log('Pefect');
    } else {
        console.log('not perfice');
    }
}

sayHi()

let myobj = {
    name : 'Beulah',
    age : 28,
    gender : 'female',
    haifyun : function(){
        console.log('My name is ' + this.name);
    },
    addFun : ()=>{
        console.log('My age is '+ myobj.age)
    }  
}

let fun1 = ()=>{
    console.log('helllo');
}

fun1()
myobj.haifyun()
myobj.addFun()


// console.log(obj.sayHi());

//Square broket symbol 

// function example (){
//     console.log('example function');
// }

// example()

// Fname['first name'] = 'simeon Haries'

// console.log(Fname);

// salary 

var employee1 = {
    name : 'simeon',
    desigination : 'Front end developer ',
    salary : 25000
}

console.log(employee1.salary);

employee1.salary = 35000

console.log(employee1.salary);

var employe2 = {
    name : 'Simeon Haries',
    salary :20000
}

console.log(employe2.name);
console.log(employe2.salary);

Object.defineProperty(employe2, 'name', {
    configurable: true,
    writable: false,
    enumerable: true,
    value : 'Simeon'
})


Object.defineProperty(employe2, 'salary', {
    configurable :true,
    writable : false,
    enumerable : true,
    //value : 50
})
employe2.name ="Beulah",

employe2.salary = 30000

console.log(employe2.name);

console.log(employe2.salary);


// var employe10 = {
//     name : 'Bensing',
//     age : 45,
//     salary : ' 10000'
// }
//  console.log(employe10.salary);

// employe10.salary = "2000"

// console.log(employe10.salary);

// Object.defineProperty(employe10, ' salary',
//  {
//      configurable: true,
//      writable : false,
//      enumerable : true,
    
// })

// employe10.salary = 450000

// console.log(employe10.salary);


// object not edtitable 

var emp10 = {
    name : 'simeon',
    age : 20,
    salary : 14000
}

console.log('salary ', emp10.salary);

Object.defineProperty(emp10, 'salary', {
    configurable : true,
    enumerable :true,
    writable :false,
    //value : 5000
})

emp10.salary = 3000
console.log('salary enumarable ', emp10.salary);

// Obect in loops

console.log('Object in loops');

var empDetls ={
    name:  "simeon",
    age : 25,
    role :'software',
    salary: 4000
}

console.log('Role is', empDetls.role);

for (detls in emp10) {
    console.log('-', detls, empDetls[detls]);
}


var empDetils2 = {
    name : 'simeon',
    age : 28,
    salary : 3500,
    gender : 'male'
}

console.log(empDetils2);

for(prop in empDetils2) {
    console.log('employee details-' ,prop,  empDetils2[prop]);
}


// how to set bonus 

console.log('bonus');
var empBonus = {
    name : 'simeon',
    age : 22,
    salary: 2000,
    bouns :2000
}

console.log(empBonus);
empBonus.bouns = 22000
console.log(empBonus);

Object.defineProperty(empBonus, 'bouns', {
    configurable : true,
    writable : false,
    enumerable : false

})

empBonus.bouns = 4444

for(detls in empBonus) {
    console.log(detls, empBonus[detls] );
}


// del property 

console.log('del property lOG');

var delEmoloye = {
    name: 'simeon',
    age : 22
}

console.log(delEmoloye);

for (prop in delEmoloye) {
    console.log(prop, delEmoloye[prop]);
}

delete delEmoloye.age 

console.log('after delete key result');

for(prop in delEmoloye) {
    console.log(prop, delEmoloye[prop]);
}


// dont delete age

var delEmoloye1 = {
    name: 'simeon',
    age : 22
}

Object.defineProperty(delEmoloye1, 'age', {
    configurable: false
})
delete delEmoloye1.age 

console.log('after delete key result');

for(prop in delEmoloye1) {
    console.log(prop, delEmoloye1[prop]);
}