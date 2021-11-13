function hai(){

}
console.log(hai());

console.log(new hai());

function EmpEE (name , desigination , salary){
    this.name = name,
    this.desigination = desigination,
    this.salary = salary    
}

var emp1= new EmpEE ('simeon', 'UI Devep', 1000)
console.log(emp1);
var emp2 = new EmpEE ('Beulah', 'Doctor', 15000)
console.log(emp2);

for(pro in emp1) {
    console.log(pro,'-' , emp1[pro]);
}

console.log(emp1 instanceof EmpEE);
console.log(emp1 instanceof Object);


// Array methods

console.log('Array methods');

var lang = ['HTML', 'CSS', 'Javascript', 'Jquery']
console.log(lang);
console.log(' Your first ', lang[0]);

var lang2 = new Array()
console.log(lang2);

var lang3 = new Array('JC', 'VueJs', 'Angular')
console.log(lang3);

//empty 10 arrays 

var lang5 = new Array (10)
console.log(lang5);
console.log(lang5.length);

//Array method checking
console.log(lang5 instanceof Array);
console.log(Array.isArray(lang5));