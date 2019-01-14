// Modal for the Schedule page
// Defining all of my variables for this modal.
var modalButton1 = document.querySelector('.modalButton1');
var modalBackground = document.querySelector('.modalBackground');
var modalclose = document.querySelector('.modalclose');

// This listens for an event of click and simultaneously prevents it from returning back to the default invisible. THANK YOU TORY
modalButton1.addEventListener('click',function(event) {
    modalBackground.classList.add('show');
    event.preventDefault();
});
// This listens for the click on the "X" button and tells it to hide the entire modal when clicked. 
modalclose.addEventListener('click', function () {
    modalBackground.classList.add('hide');
});

//=============== END MODAL CODE! ========================

// Begin Append Code! 

// Append for Depression Page!
function addPower() {
    var power = "⚔️ Better health habits, Vitamin suppliments, pharmecuticals, and counseling! ⚔️ "
    $('.depButton').append(power);
}

// Append for Anxiety Page!
function addPowerTwo() {
    var powerTwo = "🕊 Regulated Breathing and Better Coping Mechanisms! 🕊"
    $('.anxButton').append(powerTwo);
}

// Append for Addiction Page!
function addPowerThree() {
    var powerThree = "Recognizing, Avoiding, and Coping with triggering events that lead to enabling behavior!"
    $('.addButton').append(powerThree);
}

// =============== END APPEND CODE!!! ==================