/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

let i = 0;
let output;

function altCaps(str){
    while(i < str.length) {
        if (i % 2 == 0) {
            output += str[i].toUpperCase();   
        } else {
            output += str[i].toLowerCase();
        } 
        i++;
    } 
    return output
}  

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
