// 1. get data from input
// 2. store data into the toDoList array
// 3. for each loop to print out elements of arrays to appropriate columns

// day.forEach(function(day, index) {
//     let `${day}` = []
//     if(localStorage.getItem('`${day}`'))
// })

// day.forEach(function(day) {
//     if(localStorage.getitem(`'${day}'`)) {
//         `${day}` = JSON.parse(localStorage.getItem(`'${day}'`))
//     }
// })

let sunday = []
if(localStorage.getItem('sunday')) {
    sunday = JSON.parse(localStorage.getItem('sunday'))
}
let monday = []
if(localStorage.getItem('monday')) {
    monday = JSON.parse(localStorage.getItem('monday'))
}
let tuesday = []
if(localStorage.getItem('tuesday')) { 
    tuesday = JSON.parse(localStorage.getItem('tuesday'))
}
let wednesday = []
if(localStorage.getItem('wednesday')) { 
    wednesday = JSON.parse(localStorage.getItem('wednesday'))
}
let thursday = []
if(localStorage.getItem('thursday')) { 
    thursday = JSON.parse(localStorage.getItem('thursday'))
}
let friday = []
if(localStorage.getItem('friday')) { 
    friday = JSON.parse(localStorage.getItem('friday'))
}
let saturday = []
if(localStorage.getItem('saturday')) { 
    saturday = JSON.parse(localStorage.getItem('saturday'))
}

// on page load call a function
    // localStorage.getItem(day)
    // parse data into JSON object
    // put them into appropriate divs
    // for each loop

function loadPage() {
    // 1. Check if local storage has the arrays
    // 2. If there's the array, grab it
    // 3, If there's nothing, create an empty array
    if(localStorage.getItem('sunday')) {
        var toDoList = JSON.parse(localStorage.getItem('sunday'))
    } else {
        var toDoList = []
    }
    // console.log(localStorage.getItem('sunday'))
    // var toDoList = JSON.parse(localStorage.getItem('sunday'))
    console.log(toDoList)
    document.getElementById("sunlist").innerHTML = ""
    toDoList.forEach(function(element) {
        document.getElementById("sunlist").innerHTML += 
        `
        <div class="individualwrapper">
            <div class="listitems">${element}</div>
            <div class="cross">&#10005</div>
        </div>
        `
    })
    // day.forEach(function(day, index) {
    //     var toDoList = JSON.parse(localStorage.getItem(`${day}`))
    //     document.getElementById(daylist[index]).innerHTML = ""
    //     toDoList.forEach(function(element, index) {
    //         document.getElementById(daylist[index]).innerHTML += 
    //         `
    //         <div class="individualwrapper">
    //             <div class="listitems">${element}</div>
    //             <div class="cross">&#10005</div>
    //         </div>
    //         `
    //     })
    // })
}

loadPage()

let digitKeys = ['Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6']
let day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
let daybtn = ['sunbtn', 'monbtn', 'tuebtn', 'wedbtn', 'thubtn', 'fribtn', 'satbtn']
let daylist = ['sunlist', 'monlist', 'tuelist', 'wedlist', 'thulist', 'frilist', 'satlist']

var buttonclick = document.getElementById("input");
document.addEventListener("keydown", function(event) {
    // console.log('key was pressed!')
    console.log(event)
    if(event.code === 'Enter') {
        // console.log("key 13 was pressed!")
        event.preventDefault();
        document.getElementById("submit").click();
    }
    digitKeys.forEach(function(element, index) {
        if(event.code === `${element}` && event.altKey == true) {
            event.preventDefault();
            document.getElementById(daybtn[index]).checked = true;
        }
    })

    // // Check for event.altKey
    // // if(event.code === 'Digit0' && (event.code === 'AltLeft' || event.code === 'AltRight')) {
    // if(event.code === 'Digit0' && event.altKey == true) {
    //     event.preventDefault();
    //     document.getElementById("sunbtn").checked = true;
    // }
    // if(event.code === 'Digit1' && event.altKey == true) {
    //     event.preventDefault();
    //     document.getElementById("monbtn").checked = true;
    // }
    // if(event.code === 'Digit2' && event.altKey == true) {
    //     event.preventDefault();
    //     document.getElementById("tuebtn").checked = true;
    // }
    // if(event.code === 'Digit3' && event.altKey == true) {
    //     event.preventDefault();
    //     document.getElementById("wedbtn").checked = true;
    // }
    // if(event.code === 'Digit4' && event.altKey == true) {
    //     event.preventDefault();
    //     document.getElementById("thubtn").checked = true;
    // }
    // if(event.code === 'Digit5' && event.altKey == true) {
    //     event.preventDefault();
    //     document.getElementById("fribtn").checked = true;
    // }
    // if(event.code === 'Digit6' && event.altKey == true) {
    //     event.preventDefault();
    //     document.getElementById("satbtn").checked = true;
    // }
});

var item;

function input() {
    item = document.querySelector("input").value
    if(document.getElementById("sunbtn").checked) {
        // get the full sunday array first
        // then push the newest item onto it
        // then save the full updated array to ls
        console.log(sunday)
        // alert('are u sure boi?!')
        // sunday = JSON.parse(localStorage.getItem('sunday'))
        localStorage.getItem
        sunday.push(item)
        localStorage.setItem('sunday', JSON.stringify(sunday))
        // 1. get the JSON data
        // 2. parse it as an array so it is not just a string
        // 2.5 save the parsed array into a variable
        // 3. use the array.forEach() method to cycle through array
        // 4. add a new element for each array item as a div
        // document.getElementById("sunlist").innerHTML = JSON.parse(localStorage.getItem('sunday'))
        var toDoList = JSON.parse(localStorage.getItem('sunday'));
        document.getElementById("sunlist").innerHTML = ""
        toDoList.forEach(function(element) {
            document.getElementById("sunlist").innerHTML += 
            `
            <div class="individualwrapper">
                <div class="listitems">${element}</div>
                <div class="cross" onclick="remove(this)">&#10005</div>
            </div>
            `
            // if(index % 2 != 0) {
            //     document.querySelector(".individualwrapper").style.backgroundColor = "darkgrey"
            //     document.querySelector(".cross").style.color = "#121212" // why does this not work
            // }
        })
        // forEach will go through each element in the array
        // you give the forEach method a function as an argument
        // the function you give it, also has arguments
            // these arguments are the element of the array, and it's index (index is optional)
    }
    else if(document.getElementById("monbtn").checked) {
        monday.push(item)
        localStorage.setItem('monday', JSON.stringify(monday))
        var toDoList = JSON.parse(localStorage.getItem('monday'));
        document.getElementById("monlist").innerHTML = ""
        toDoList.forEach(function(element) {
            document.getElementById("monlist").innerHTML += 
            `
            <div class="individualwrapper">
                <div class="listitems">${element}</div>
                <div class="cross" onclick="remove(this)">&#10005</div>
            </div>
            `
        })
    }
    else if(document.getElementById("tuebtn").checked) {
        tuesday.push(item)
        localStorage.setItem('tuesday', JSON.stringify(tuesday))
        var toDoList = JSON.parse(localStorage.getItem('tuesday'));
        document.getElementById("tuelist").innerHTML = ""
        toDoList.forEach(function(element) {
            document.getElementById("tuelist").innerHTML += 
            `
            <div class="individualwrapper">
                <div class="listitems">${element}</div>
                <div class="cross" onclick="remove(this)">&#10005</div>
            </div>
            `
        })
    }
    else if(document.getElementById("wedbtn").checked) {
        wednesday.push(item)
        localStorage.setItem('wednesday', JSON.stringify(wednesday))
        var toDoList = JSON.parse(localStorage.getItem('wednesday'));
        document.getElementById("wedlist").innerHTML = ""
        toDoList.forEach(function(element) {
            document.getElementById("wedlist").innerHTML += 
            `
            <div class="individualwrapper">
                <div class="listitems">${element}</div>
                <div class="cross" onclick="remove(this)">&#10005</div>
            </div>
            `
        })
    }
    else if(document.getElementById("thubtn").checked) {
        thursday.push(item)
        localStorage.setItem('thursday', JSON.stringify(thursday))
                var toDoList = JSON.parse(localStorage.getItem('thursday'));
        document.getElementById("thulist").innerHTML = ""
        toDoList.forEach(function(element) {
            document.getElementById("thulist").innerHTML += 
            `
            <div class="individualwrapper">
                <div class="listitems">${element}</div>
                <div class="cross" onclick="remove(this)">&#10005</div>
            </div>
            `
        })
    }
    else if(document.getElementById("fribtn").checked) {
        friday.push(item)
        localStorage.setItem('friday', JSON.stringify(friday))
                var toDoList = JSON.parse(localStorage.getItem('friday'));
        document.getElementById("frilist").innerHTML = ""
        toDoList.forEach(function(element) {
            document.getElementById("frilist").innerHTML += 
            `
            <div class="individualwrapper">
                <div class="listitems">${element}</div>
                <div class="cross" onclick="remove(this)">&#10005</div>
            </div>
            `
        })
    }
    else if(document.getElementById("satbtn").checked) {
        saturday.push(item)
        localStorage.setItem('saturday', JSON.stringify(saturday))
                var toDoList = JSON.parse(localStorage.getItem('saturday'));
        document.getElementById("satlist").innerHTML = ""
        toDoList.forEach(function(element) {
            document.getElementById("satlist").innerHTML += 
            `
            <div class="individualwrapper">
                <div class="listitems">${element}</div>
                <div class="cross" onclick="remove(this)">&#10005</div>
            </div>
            `
        })
    }
    document.getElementById("input").value = "";
}

document.addEventListener("keydown", function(event) {
    console.log(event.code)
})

function remove(el) {
    // console.log(el.parentNode.firstElementChild.innerText)
    let pos = sunday.indexOf(el.parentNode.firstElementChild.innerText)
    el.parentNode.remove()
    sunday.splice(pos, 1)
    localStorage.setItem('sunday', JSON.stringify(sunday))
}