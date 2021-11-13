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
console.log(books.length);

// Pop Method

var remBook = books.pop()
console.log(books); // Removed only last book 
console.log(books.length);


