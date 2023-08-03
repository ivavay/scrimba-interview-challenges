import shoppingCart from "./data.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr){
    let numbers =[];
    
    for (let i = 0; i< 6; i++) {
        numbers.push(arr[i].price)  
    }

    let total = numbers.reduce(function (previousValue, currentValue) {
       return previousValue + currentValue;
    });
    
    total = total.toFixed(2)
    return total
    
}

console.log(total(shoppingCart));
