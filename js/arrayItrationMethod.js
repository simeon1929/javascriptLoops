var fruites = ['apple', 'mango', 'papaya']
var fruites2 = ['apple', 'mango', 'papaya']
console.log('your array is ', fruites);

// for(let i=0; i<fruites.length; i++) {
//     console.log(i);
// }

// for each method 

// fruites.forEach((item , index, array)=>{
//     console.log('array friutes is ', array);
//     console.log('Index friutes is ', index);
//     console.log('item friutes is ', item);
// })



console.log('your array is ', fruites);
fruites2.forEach((item, index, array )=>{
     console.log('Array is ',array );
    console.log('Index is ', index);
    console.log('Item is ', item);
})

// map method 

var priceList = [10, 40, 30, 20, 5]

var newPrice = priceList.map(price=>{
    //console.log('price', price);
    return price + 10
})

console.log('new Price', newPrice);

//filter method 

var employee = [
    {
        name : 'simeon',
        slary :1000

    },
    {
        role : 'beulah',
        slary: 2000
    },
    {
        role : 'Evania',
        slary: 4000
    },
    {
        role : 'Selvam',
        slary : 5000
    }
]

var goodSlary = employee.filter(emp=>{
    return emp.slary >= 3000
})



console.log(goodSlary);

goodSlary.forEach(item =>{
    console.log(item.role,  item.slary);
})


