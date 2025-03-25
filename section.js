// Section 1 : Play with Variables 

console.log(1+2);
console.log("APPLE"+"orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1 + true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");

// Section 2 : Play with Arrays

//// 1. A Cricket Team has 11 players. Create a list with the names of all players.

let players = ["MS Dhoni", "Virat Kohli", "Rohit Sharma", "Ravindra Jadeja", "KL Rahul", "Hardik Pandiya", "Shreyas Iyer", "Shubman Gill", "Axar Patel", "Yadav", "Shami"]
console.log(players); 

//// 2. Unfortunately, the first player had an injury. Remove him from the list of players. 

players.shift();
//players.splice(0, 1); another way
console.log(players);  


//// 3. Now, find out the number of players 

//let numberOfPlayers = players.length;
//console.log(numberOfPlayers);

//// 4. Add another player to the above list of players to make the count 11

players.push("KJ");
console.log(players);  
let numberOfPlayers = players.length;
console.log(numberOfPlayers);

//// 5. The cricket board has decided to take photographs of all players and so they would need the players list in sorted format. 

players.sort();
console.log(players);

//// 6. Display all the Players name and assign a random jersey number. For example. MS Dhoni-7 7. The 
// cricket board wants to print the names of all players in uppercase and store it in a different location 
// for printing jerseys. Do not modify the existing players list.


let playersWithJersey = [];

for (let i = 0; i < players.length; i++) {
  
    let jerseyNumber = Math.floor(Math.random() * 99) + 1;
    
    let playerInfo = players[i].toUpperCase() + "-" + jerseyNumber;
    
    playersWithJersey.push(playerInfo);
}

console.log(playersWithJersey);
