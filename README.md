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
