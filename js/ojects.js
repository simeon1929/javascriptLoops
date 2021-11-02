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
    }

    
}

myobj.haifyun()


// console.log(obj.sayHi());