//
// for loops

//print 10 Numbers


for(let x= 0; x<10 ; x++) {
    //console.log('number is ', x)

    // find odd numer 

    if (x%2==0) {
        console.log('Even number is', x)
    } else if(x%2 ==1) {
        console.log('Odd number is', x)
    }
}


// switch case 

let days = prompt('Enter Your number ', 1)

switch(days) {
    case 1:
        console.log('Monday Working day' );
    break;

    case 2:
        console.log('Tuesday Working day');
    break;

    case 3:
        console.log('Wednesday Working day');
    break;

    case 4:
        console.log('Thursday Working day');
    break;

    case 5:
        console.log('Friday Working day');
    break;

    case 6:
        console.log('Saturday Working day');
    break;

    case 7:
        console.log('Sunday Working day');
    break;

    default:
        console.log('Sunday Working day');
    break;
    
}