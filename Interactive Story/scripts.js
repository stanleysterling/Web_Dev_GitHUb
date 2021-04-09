var bgm = new Audio("1 Hour of Epic Space Music COSMOS - Volume 2   GRV MegaMix.mp3")
var death = new Audio("Gta 5 Wasted Sound effect.mp3")

function buttonone() {
    bgm.play()

    document.querySelector("#test-area").innerHTML = ""
    document.querySelector("#test-area").innerHTML = 
    `
    <p>All in a sudden you see red dust in the air and the strong winds blowing them onto your helmet. <br>
    You have no choice but keep walking towards the launchpad. <br>
    Right on the corner of your sight, you saw an antenna snapped from a transmitter tower and now it's flying with the storm.</p>
    <button onclick="buttontwo()" class="buttontwo">Quicken my pace</button>
    `
}

function buttontwo() {
    document.querySelector(".container").style.backgroundImage = "url('blood.jpg')";
    document.querySelector("#test-area").innerHTML = ""
    document.querySelector("#test-area").innerHTML = 
    `
    <p>EXTREME PAIN SHATTERS YOUR NERVES<br>
    The detached antenna just hit you<br>
    You passed out</p>
    <button onclick="buttonthree()" class="buttonthree">Wake up</button>
    `
}

function buttonthree() {
    document.querySelector(".container").style.backgroundImage = "url('tumblr_pev1h40D0i1sg6ldbo1_1280.webp')";
    document.querySelector("#test-area").innerHTML = ""
    document.querySelector("#test-area").innerHTML = 
    `
    <p>You woke up and found all your crewmates have left, they thought you were dead. Now you are alone.<br>
    What do you want to do next?</p>
    <button onclick="buttonfourone()" class="buttonfour mgn-top">Plant food</button>
    <button onclick="buttonfourtwo()" class="buttonfour">Deal with wounds</button>
    `
}

function buttonfourone() {
    bgm.pause()
    bgm.load()
    death.play()

    document.querySelector(".container").style.backgroundImage = "url('wasted.jpg')";
    document.querySelector("#test-area").innerHTML = ""
    document.querySelector("#test-area").innerHTML = 
    `
    <p>Your wound wasn't clean and is now seriously infected.<br>
    You are very ill and no longer able to work. The only option is to lay on bed and wait to die.</p>
    <button onclick="restart()" class="restart">Revive</button>
    `
}

function buttonfourtwo() {
    document.querySelector("#test-area").innerHTML = ""
    document.querySelector("#test-area").innerHTML = 
    `
    <p>You stitched up your wounds and took good care of it. After a few days you are ready to work again.<br>
    Eventually, you find out that you will be out of food soon.</p>
    <button onclick="buttonfive()" class="buttonfive">Search around the hab</button>
    `
}

function buttonfive() {
    document.querySelector("#test-area").innerHTML = ""
    document.querySelector("#test-area").innerHTML = 
    `
    <p>You found a patch of potatoes. You decided to plant them in the hab as survival food.<br>
    You found out that you need some resources to plant the potatoes. What are you going to do?</p>
    <button onclick="buttonsixone()" class="buttonsix mgn-top">Make water from rocket fuel</button>
    <button onclick="buttonsixtwo()" class="buttonsix">Make fertilizers from own feces</button>
    `
}

function restart() {
    death.pause()
    bgm.play()
    document.querySelector(".container").style.backgroundImage = "url('tumblr_pev1h40D0i1sg6ldbo1_1280.webp')";

    document.querySelector("#test-area").innerHTML = ""
    document.querySelector("#test-area").innerHTML = 
    `
    <p>You have been out on missions on Mars for 2 years and now your can't wait to go back home, to the beautiful Earth</p>
    <button onclick="buttonone()" class="buttonone">Open the airlock</button>
    `
}