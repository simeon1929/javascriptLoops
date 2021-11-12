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
    value : 50
})
employe2.name ="Beulah",

employe2.salary = 30000

console.log(employe2.name);

console.log(employe2.salary);


