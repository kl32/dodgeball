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
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
  constructor(id, name, age, skillSet, placeBorn) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn  = placeBorn;  
    this.team = null;
  }
}

class dodgeBallPlayer extends Player {
  constructor (canThrow, canDodge, isHealthy, hasPaid, yearsOfExperience, id, name, age, skillSet, placeBorn) {
    super  (id, name, age, skillSet, placeBorn);
    this.canThrow = canThrow;
    this.canDodge = canDodge;
    this.isHealthy = isHealthy;
    this.hasPaid = hasPaid;
    this.yearsOfExperience = yearsOfExperience;
  }

  chooseTeam(validPlayer) {
    team.validPlayer.push(this.arrOfPeople[id]);
  }
}

class Team {
  constructor(name, mascot, color) {
    this.name = name;
    this.mascot = mascot;
    this.color = color;
    this.validPlayer = [];
  }
}

const teamOne = new Team("Anaheim Ducks", "duck", "blue");
const teamTwo = new Team("NY Rangers", "ranger", "red");


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

const signUpList = (element) => {

  console.log(listOfPlayers)
}

const makePlayer = (id) => {
  listOfPlayers.push(arrOfPeople[id]);
  document.getElementById("players").after(people);
  console.log(`li ${id} was clicked!`)
}