'use strict;'
const assert = require('assert');

const arrOfPeople = [{
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

class player {
  constructor(id, name, age, skillSet, placeBorn) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.skillSet = skillSet;
      this.placeBorn - placeBorn;
      this.team = null;
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

}

const makePlayer = (id, element) => {
 
}