// JSON
// a way to store data in JavaScript Object Notation

var gracy = {
    // properties
    hair: 'black',
    age: 18,
    skill: 'drawing'
}

// localStorage can save data with "Object notation"

// JSON has built in functions to stringify or parse data

localStorage.setItem('gracy', JSON.stringify(gracy))

const user = localStorage.getItem('gracy')

const parsedUser = JSON.parse(user)

document.write(parsedUser)

// parsedUser = JSON.parse(localStorage.getItem('toDoList'))


// Calendar Example

let mondayToDo = []
let mondayToDo = []
let mondayToDo = []
let mondayToDo = []
let mondayToDo = []
let mondayToDo = []
let mondayToDo = []

mondayToDo.push('')
