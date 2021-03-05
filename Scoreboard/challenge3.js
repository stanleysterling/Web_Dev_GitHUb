/*

You will create an ice hockey scoreboard.
You can add and remove goals.
You can control the current period (there are 3 periods in Hockey)

Lastly, you can add a player name to the penalty list.
Create an area where you can add and remove players name from a penalty area.

1. You will need variables to store the points
2. When a user clicks on the add button, you will need to add to the variable, and then display it in HTML
3. When a user clicks the subtract button, you will need to subtract from the variable, and then display it in HTML
4. Use CSS Flexbox or Grids to build your scoreboard layout
5. You will need a button to clear the penalty list
6. A reset score button should also be included that clears your entire scoreboard.
7. The score cannot be less than 0
8. The period can only be 1, 2, or 3 (starting from 1)

GOOD LUCK ✌🏒

*/

let homeScore = 0;
let guestScore = 0;
let period = 0;

function addHomeScore() {
  homeScore += 1;
  document.getElementById("homescorenumber").innerHTML = homeScore;
}

function subtractHomeScore() {
  if (homeScore > 0) {
    homeScore -= 1;
    document.getElementById("homescorenumber").innerHTML = homeScore;
  } else {
    document.getElementById("homescorenumber").innerHTML = homeScore;
  }
}

function resetHomeScore() {
  homeScore = 0;
  document.getElementById("homescorenumber").innerHTML = homeScore;
}

function addGuestScore() {
  guestScore += 1;
  document.getElementById("guestscorenumber").innerHTML = guestScore;
}

function subtractGuestScore() {
  if (guestScore > 0) {
    guestScore -= 1;
    document.getElementById("guestscorenumber").innerHTML = guestScore;
  } else {
    document.getElementById("guestscorenumber").innerHTML = guestScore;
  }
}

function resetGuestScore() {
  guestScore = 0;
  document.getElementById("guestscorenumber").innerHTML = guestScore;
}

function periodOne() {
  period = 1;
  document.getElementById("periodnumber").innerHTML = period;
}

function periodTwo() {
  period = 2;
  document.getElementById("periodnumber").innerHTML = period;
}

function periodThree() {
  period = 3;
  document.getElementById("periodnumber").innerHTML = period;
}

// let penaltyOne = document.getElementById("homePenaltyList").value

let penaltyName = null;
let homePenalty = [];
let guestPenalty = [];

function penalty() {
  // if (document.querySelector("#penaltyinput").value == null) {
  //   alert2()
  // }

  if (document.getElementById("home").checked) {
    penaltyName = document.querySelector("#penaltyinput").value;
    homePenalty.push(penaltyName);

    var index;
    for (i = 0; i <= homePenalty.length; i++) {
      if (homePenalty[i] === penaltyName) {
        index = i;
      }
    }

    let typeName = homePenalty[index]
    typeWriter()

    var i = 0;
    // var txt = typeName; /* The text */
    var speed = 70; /* The speed/duration of the effect in milliseconds */
    
    function typeWriter() {
      if (i <= typeName.length) {
        document.getElementById("homepenaltylist").innerHTML += typeName.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        console.log(i)
      }
      homePenalty.push("<br>")
    }
    


    // console.log(index);
    

    // document.getElementById("homepenaltylist").innerHTML = homePenalty.join(
    //   "<br/>"
    // );
    // console.log(homePenalty)

    // typeWriter()
    // document.getElementById("homepenaltylist").innerHTML += typeWriter();

    // var penalty;
    // for (penalty of homePenalty) {
    //   document.getElementById("homepenaltylist").innerHTML = typeWriter();
    // }


  } else if (document.getElementById("guest").checked) {
    penaltyName = document.querySelector("#penaltyinput").value;
    guestPenalty.push(penaltyName);
    document.getElementById("guestpenaltylist").innerHTML = guestPenalty.join(
      "<br/>"
    );
    console.log(guestPenalty)
  } else {
    alert();
  }
}

function penaltyReset() {
  homePenalty.length = 0;
  guestPenalty.length = 0;
  document.getElementById("homepenaltylist").innerHTML = homePenalty;
  document.getElementById("guestpenaltylist").innerHTML = guestPenalty;
}

//Timer
function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
}

CountDownTimer.prototype.start = function () {
  if (this.running) {
    return;
  }
  this.running = true;
  var start = Date.now(),
    that = this,
    diff,
    obj;

  (function timer() {
    diff = that.duration - (((Date.now() - start) / 1000) | 0);

    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function (ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  })();
};

CountDownTimer.prototype.onTick = function (ftn) {
  if (typeof ftn === "function") {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function () {
  return !this.running;
};

CountDownTimer.parse = function (seconds) {
  return {
    minutes: (seconds / 60) | 0,
    seconds: seconds % 60 | 0,
  };
};

window.onload = function () {
  var display = document.querySelector("#time"),
    timer = new CountDownTimer(1200),
    timeObj = CountDownTimer.parse(1200);

  format(timeObj.minutes, timeObj.seconds);

  timer.onTick(format);

  document.getElementById("start").addEventListener("click", function () {
    timer.start();
  });

  function format(minutes, seconds) {
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
  }
};

//snackbar
function alert() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function alert2() {
  var x = document.getElementById("snackbar2");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

//typewriter

// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   var i = 0;
//   if (i <= penaltyName.length) {
//     document.getElementById("homepenaltylist").innerHTML += penaltyName.charAt(
//       i - 1
//     );
//     i++;
//     setTimeout(typeWriter, speed);
    // document.getElementById("homepenaltylist").innerHTML = homePenalty.join('<br/>')
//   }
// }
