
/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];


function flatten(arr){
    let newStr = ""
    
    for (let i = 0; i < arr.length*3; i++) {
        let newArr = arr + arr[i[i]]
        newArr = [...newArr]
        
        if (newArr[i].includes(",")) {
            newStr += newArr.splice(i-1, 1)
        } 
        
    }
    newStr = [...newStr]
    console.log(newStr) 
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
