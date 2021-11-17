// Array sort method
console.log('Array sort method');
var food = ['lunch', 'Dinner', 'Break fast']
console.log('sort method ', food.sort());

// Another example
var letters = ['a', 'd', 'c', 'b']
console.log('letters are ',letters.sort());

// Another example 

var numbers = [1,4,5,3,2]
console.log('your sort number is ', numbers.sort());




//  reverse method 
var numberRev = [4,3,2,1]
console.log('Your reverse method result is ', numberRev.reverse());

var letterRev = ['a', 'b','c']
console.log('Letter reverse is ', letterRev.reverse());

var foodRev = ['Dinner', 'Lunch', 'Break fast']
console.log('Your food reverse is ', foodRev.reverse());


// method of reverse 
//Step One 
var newNumber = [1,4,5,7, 100]
console.log('number is ', newNumber);

//push Step 2
console.log(newNumber.push(25));
console.log('After push ', newNumber);
//Sort Step 3
console.log('After Reverse ', newNumber.reverse()); // not corect
//Assending method
function sortMethod__assending (value1, value2) {
    return value1 - value2
}
newNumber.sort(sortMethod__assending)
console.log(newNumber);

//Desending method 
function sort__desending (value1, value2) {
    if(value1 > value2) return -1
    else if (value1<value2) return 1
    else return 0
}
newNumber.sort(sort__desending)
console.log(newNumber);

// Array manupulation Method

console.log('Array manupulation Method');

var fritues = ['Apple', 'Orange', 'Mango']
console.log('fruites ', fritues);
var newFruites = fritues
console.log('New fruites' , newFruites);
fritues.push(  'New Fr Kiwi')
console.log('after push method', fritues);
console.log(fritues);
//Using concat method
console.log('Concat method'); 
var newConcat = fritues.concat('dinner')
console.log('used concat mthod', newConcat);
console.log('fruites ', fritues);
console.log('fruites clone ', newFruites);

var familyMember = ['father', 'mother']
console.log('family member', familyMember);
var addFamilymember = familyMember.concat('uncle, aunty') 
console.log('marrage family member', addFamilymember);
var finalFamilymember = addFamilymember.concat('Evaniya', ['boy baby', 'boy baby'])
console.log('final family member', finalFamilymember);

// slice method 
console.log('slice method is started');
var names = ['aa', 'bb','cc', 'dd','ee', 'ff']
console.log('Names ', names);
var slicemethod1 = names.slice(0,3)
console.log('slice method betwen', slicemethod1);
var names2 = ['aa', 'bb','cc', 'dd','ee', 'ff']
var sliceMethod2 = names2.slice(3)
console.log('slice method two 3 after', sliceMethod2);


// splice del method
var newNum = [1,2,3,4,5,6,7]
console.log('your number is ', newNum);
var spiceMeth1 = newNum.splice(2,3)
console.log('after spice method ', spiceMeth1);
var newNum1 = [1,2,3,4,5,6,7]
var spliceMethod2 = newNum1.splice(3, newNum1.length-3)
console.log('Your splice method is ', spliceMethod2);
// splice del and add method
var newNum4 = [1,2,3,4,5,6,7]
var spiceMethod3 = newNum4.splice( 0, 0, 'simeon')
console.log('Your splice method3 is ' , spiceMethod3);

