var softwareLangues = ['JavaScript', 'Php', 'Phython']
console.log(softwareLangues);
console.log('Array length is ',softwareLangues.length);

// Array checking Methods
console.log(softwareLangues instanceof Array);
// Array second method checking 
console.log(Array.isArray(softwareLangues));

// Array writting other method 

var frontEnd = new Array ()
console.log(frontEnd);

var frontEndLang = new Array('Html', 'Css', 'Javascript', 3)

console.log(frontEndLang);
console.log(frontEndLang.length);

// array checking 

console.log(frontEndLang instanceof Array);
console.log(Array.isArray(frontEndLang));

// Empty array set

var empArray = new Array(100)
console.log(empArray);


// Array conversion methods

var school = {
    name : 'Bethlahem',
    hi : function (){
        return 'orgnaizain'
    },
    toString : function (){
        return 'Your scholl name is ' + this.name +' '+ this.hi()
    },
    valueOf : function (){
        return true
    }
}

console.log(school.name);
console.log(school.hi())
console.log(school.toString())
console.log(school.valueOf());

var frutes = ['Mango', 'Apple', 'Orange']

console.log(frutes);
console.log(frutes.toLocaleString());
console.log(frutes.toString());
console.log(frutes.valueOf());

// Array join methods

var cars = ['Ciaz', 'Boleno', 'Swift', 'Dezire']
console.log(cars);
console.log(cars.join());
console.log(cars.join('-'));
console.log(cars.join('+'));


//Array stack data structure method

//Push and Pop medthod 

var books = new Array ('Tamil', 'english', 'maths', 'science')
console.log(books);
console.log(books.length);


// Push methods
var addBooks = books.push('Socal Sicene', 'Phycial eduction') // Add last array

console.log(books);
console.log('Push book positions ',addBooks);
console.log(books.length);

// Pop Method

var remBook = books.pop()
console.log(books); // Removed only last book 
console.log('Pop Removed book is ',remBook);
console.log(books.length);

// array first item add and removed using Shit and Unshift method 

var food= new Array('Break Fast', 'Lunch', 'Dinner')
console.log(food);

// Shift method

console.log(food.shift());
console.log(food); // removed first array item

var addFood = food.unshift('Need to add') // Added a first item 
console.log(food);


// Array Reordering methods

//sort method
var num = [1,3, 5, 2,4]
console.log(num);

num.sort()
console.log(num);

// Reverse method 

var foodItems = ['dinner', 'Lunch','Breakfast']
console.log(foodItems);
foodItems.reverse()
console.log(foodItems);

// Numbers in sort and reverse 

var newNum = [2,3,5,4,7,6,1]
console.log(newNum);
newNum.sort()
console.log(newNum);
newNum.reverse()
console.log(newNum);

//Array concat method (clone)
console.log('concat method || clone');

var fruits = ['apple', 'Orange', 'mango']
console.log('Fruits is ', fruits);
var addFruits = ['pineapple', 'kivi']
console.log('Add fruits ',addFruits);

 addFruits.push('add push One')
 console.log(addFruits);

 var concatFruites = addFruits.concat('concat')
console.log('concat fruites', concatFruites);

var concatFrit1 = concatFruites.concat('One', 'Two')

console.log('Concat fruites' ,concatFrit1);

// concat other method

var newFr = ('apple', 'orange')
console.log('your array details ',newFr);
var concatFr = newFr.concat('mango ','kivi ', ['newfrOne ', 'newfrtwo'])
console.log('yout concat details-' , concatFr);

//concat method end

//Array ordring method 

var number = [4, 6, 50]

console.log('Numaber in order is ', number);



