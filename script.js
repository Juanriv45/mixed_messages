const randomNumber = (array) => {
    return Math.floor(Math.random()*array.length)
};

const playerArray = ["Kobe", "Shaq", "Dirk","Jordan"];
const pointsArray = [45,72,55,84,87,12];
const teamArray = ["Lakers","Suns","Heat","Raptors", "Mavs"];

const messageCreator = (player,points,team) =>{
    return  `Amazing! ${player} finished the game against the ${team} with ${points} points!`
}