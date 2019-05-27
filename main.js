'use strict';


const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  }
];


const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class Player {
  constructor(player) {
      this.id = player.id;
      this.name = player.name;
      this.age = player.age;
      this.skillSet = player.skillSet;
      this.placeBorn = player.placeBorn;
  }
}

const players = arrOfPeople.map(player => new Player(player))

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

class dodgeBallPlayer extends Player {
  constructor(canThrow, canDodge, isHealthy, hasPaid, yearsOfExperience) {
    super(player);
    this.canThrowBall = player.canThrowBall;
    this.canDodgeBall = player.canDodgeBall;
    this.hasPaid = player.hasPaid;
    this.signUpList = player.isHealthy;
    this.yearsExperience = player.yearsExperience;
  }
}




class Team {
  constructor(name, mascot, color) {
      this.name = name;
      this.mascot = mascot;
      this.color = color;
  }
}

const signUpList = (element) => {
  const listElement = document.getElementById('playersList')
  listOfPlayers.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}


const makePlayer = (id) => {
  listOfPlayers.push(players[id]);
  document.getElementById('playersList').remove(players.id);
  console.log(listOfPlayers);
}
