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