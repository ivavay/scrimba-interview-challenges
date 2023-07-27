/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 33, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}


function findTheWinner(obj){
    let newArr = Object.entries(obj);
    // sorts in descending orer 
    newArr.sort()
    for (let i = 0; i < newArr.length; i++) {
        return "The winner is " + newArr[i].slice(0,-1) + " with " + newArr[i].slice(1) + " votes!"
    }
    

}

console.log(findTheWinner(gameNightFood));
