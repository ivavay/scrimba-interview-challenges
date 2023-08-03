import shoppingCart from "./data.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

// my solution 
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

// the course's solution (which makes more sense, without the need for loop) 

// function total(arr){
//     const total = arr.reduce((acc, curr) => {
//         return acc + curr.price;
//     }, 0);
    
//    return total.toFixed(2);
// }

console.log(total(shoppingCart));
