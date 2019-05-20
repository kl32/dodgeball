'use strict;'
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arrOfPeople = [{
    id: 2,
    name: "Saitama",
    age: 25,
    skillSet: "one punch man",
    placeBorn: "City-Z"
  },
  {
    id: 3,
    name: "Genos",
    age: 19,
    skillSet: "cyborg",
    placeBorn: "City-Z"
  },
  {
    id: 4,
    name: "Watchdog Man",
    age: 20,
    skillSet: "guardian of q city",
    placeBorn: "City-Q"
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
    this.placeBorn = placeBorn;
    this.team = null
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
// your code here
}

const makePlayer = (id, element) => {
// your code here
}