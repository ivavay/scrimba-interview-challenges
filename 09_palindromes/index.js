/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

// reverse the string and compare to the orignal string 
function isPalindrome(str){
    let reversedStr = str.split('').reverse().join('')
    if (reversedStr == str) {
        return true
    } else {
        return false
    }
    
}

// Test your function
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("civic")); // true
console.log(isPalindrome("octopus")); // false
console.log(isPalindrome("pumpkins")); // false
console.log(isPalindrome("madam")); // true
