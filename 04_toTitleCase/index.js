
Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

// This part I didn't figure out
let i = 0 
function toTitleCase(str){
    while (i < str.length) {
        if (str[i - 1] == " ") {
            console.log("hi")
            return capitalizeWord(str)
        } else {
            
        }
        i++
    }
   
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
