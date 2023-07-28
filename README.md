### Scrimba Interview Coding Challenges 

Here, I try to practice some coding challenges daily and document how I approached solving them. All code my version. 

🌼 01 - [Panic Function](https://github.com/ivavay/scrimba-interview-challenges/tree/main/01_panic-function)

I first tried using a for and a while loop to see if it'd work if I loop through each character of the string to see if there is a blank space. Then, I found out that there is the ```replaceAll()``` method which can do that instead. The final solution takes a string in lowercase, converts all letters to uppercase, and finds all empty spaces and replaces them with an emoji. 

🌼 02 - [Whisper Function](https://github.com/ivavay/scrimba-interview-challenges/tree/main/02_whisper-function) 

This exercise surprisingly only took 4-5 minutes to complete because it is very similar to the previous one. I appended a string to the front of the sentence using concatenation, converted all letters to lowercase, and used the ```replace``` method to remove the ending exclamation mark.

🌼 03 - [Alternating Caps](https://github.com/ivavay/scrimba-interview-challenges/tree/main/03_alternating-caps)

I got to work for the most part except I couldn't figure out how the output string has ```undefined``` attached to it in the front. The goal was to take a string and convert each letter into alternating lowercase and uppercase. I used an if/else inside a while loop for this. 

🌼 04 - [toTitleCase](https://github.com/ivavay/scrimba-interview-challenges/tree/main/04_toTitleCase)

I was able to figure out the first part, which was to use ```slice``` to make the first letter of a word capitalized. However, I couldn't get the second part where you make each word of a sentence string capitalized. I tried to see if I could use the index of a string to detect the letter after the blank space ```" "``` via ```str[i+1]``` but that didn't work either. I took at look at the solution and it seems like the ```map``` method is involved in looping as well as putting the words in a new array. 

🌼 05 - [Definitely Not FizzBuzz](https://github.com/ivavay/scrimba-interview-challenges/tree/main/05_definitely-not-fizzbuzz)

This exercise, which was definitely similar to FizzBuzz, also just took 5-10 minutes to complete. I used a for loop and if/else conditional for this. The ```%``` modulo was the highlight of this code block. 

🌼 06 - [Emojify](https://github.com/ivavay/scrimba-interview-challenges/tree/main/06_emojify)

The first part of the exercise was to check if the word is in the given object, and turn it into an emoji if it comes with in this form ```:flower:```. The second part was to use the function in the first part to check if a word in a phrase can be emojifid. I learned some new things i.e. how to access the key-value pair in an object. I also learned how to use ```.split(" ")``` split method to separate each word in a phrase into its own item in an array. This was the funnest challenge yet. 

🌼 07 - [Anagram](https://github.com/ivavay/scrimba-interview-challenges/tree/main/07_anagram)

Thanks to the hints from the prompt, I was able to complete this exercise in under 10 minutes. The ```sort()``` method was monumental in sorting the string turned array in alphabetical order, which could then be compared between the two strings to see if the letters match and therefore an anagram. 

🌼 08 - [Decode Alien Message](https://github.com/ivavay/scrimba-interview-challenges/tree/main/08_decode-alien-message)

This was a fun one! Learned how to use the ```reverse()``` method on strings and got more comfortable calling functions inside of functions. The goal was to reverse each character in a string of words and array of strings. 

🌼 09 - [Palindromes](https://github.com/ivavay/scrimba-interview-challenges/tree/main/09_palindromes)

The goal of this challenge was to see if a word is a palindrome, that is, a word that is spelled the same backward and forward. I used what I had written in the last challenge and the puzzle was solved in a heartbeat! 

🌼 10 - [Save Grandpa's Passwords](https://github.com/ivavay/scrimba-interview-challenges/tree/main/10_save-grandpa's-passwords)

The goal was to remove duplicates in a string. I learned how to use the ```[...new Set(chars)]``` set to convert the string to a unique set of values in an array. Then I removed the commas in between using ```replaceAll()``` method. Then, it was done :)  

🌼 11 - [Frequency of Letters](https://github.com/ivavay/scrimba-interview-challenges/tree/main/11_frequency-of-letters)

This was an exercise in which the program had to count how many letters (case-agnostic) there are in a string (excluding the spaces). 

🌼 12 - [Recipe Book](https://github.com/ivavay/scrimba-interview-challenges/tree/main/12_recipe-book)

This was similar to the password exercise in which I removed duplicates from a string, except this time it's an array. ```[... new Set(char)]``` is so useful!

🌼 13 - [Pumpkin's Prizes](https://github.com/ivavay/scrimba-interview-challenges/tree/main/13_pumpkins_prizes)

This one was tough — I got the first part to work but not the second. The first part was to flatten out a nested string-based array while the second part was to flatten out a nested numbers array. 

🌼 14 - [Count the Scrimba Students](https://github.com/ivavay/scrimba-interview-challenges/tree/main/14_sum-of-array) 

This one was a breeze, it was to sum up the integers in an array. 

🌼 15 - [Pizza Night](https://github.com/ivavay/scrimba-interview-challenges/tree/main/15_pizza-night)

The goal was to convert an object to an array and then loop through that array using ```slice``` to get rid of the commas, extra spaces to form a string.

🌼 16 - [Totally Private Data Farm](https://github.com/ivavay/scrimba-interview-challenges/tree/main/16_modify-objects) 

The goal was to take a nested array of objects and return an array of modified objects with combined full names and birthdays. I used the ```toDateString()``` method on new Date object to make it work. Also used the map method to map over items in objects.

