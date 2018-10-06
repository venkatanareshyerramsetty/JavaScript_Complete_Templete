// Get the Elements
var originalTextElement = document.querySelector('.text-section-div p');
var textAreaElement = document.querySelector('#text-area');
var textAreaBorderElement = document.querySelector('#text-area');
var minutesElement = document.querySelector('#minutes');
var secondsElement = document.querySelector('#seconds');
var resetButtonElement = document.querySelector('#reset');
var messageElement = document.querySelector('.cong-section');
var textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

var timer = 0;
var minutes = 0;
var seconds = 0;
var interval = 0;
var timerRunning = false;

// Keypress Event for TextArea
textAreaElement.addEventListener('keypress',function() {
   var textEnteredLength = textAreaElement.value.length;
   if(textEnteredLength === 0 && !timerRunning){
       // start Timer
       interval = setInterval(startTimer,10);
       timerRunning = true;
   }
});

// keyup event for TextArea
textAreaElement.addEventListener('keyup',function() {
   var originalText = originalTextElement.textContent.trim();
   var textEntered = textAreaElement.value;
   var partialText = originalText.substr(0,textEntered.length);

   if(textEntered === ''){
       textAreaBorderElement.style.borderColor = 'gray';
   }
   else{
       if(textEntered === originalText){
           // green
           textAreaBorderElement.style.borderColor = 'seagreen';
           // stop the timer
           clearInterval(interval);
           // show the message
           messageElement.style.display = 'block';
       }
       else{
           if(textEntered === partialText){
               // blue
               textAreaBorderElement.style.borderColor = 'lightblue';
           }
           else{
               // red
               textAreaBorderElement.style.borderColor = 'orangered';
           }
       }
   }

});


// Start Timer Function
function startTimer() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));

    minutesElement.textContent = leadingZero(minutes);
    secondsElement.textContent = leadingZero(seconds);
    timer++;
}

// leadingZero function
function leadingZero(time) {
    if(time <= 9){
        return "0" + time;
    }
    else{
        return time;
    }
}

// Reset Functionality
resetButtonElement.addEventListener('click',function() {
   clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    timerRunning = false;
    textAreaElement.value = '';
    textAreaBorderElement.style.borderColor = 'gray';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    messageElement.style.display = 'none';
    // get the random text
    getRandomText();
});

// get the Random Text
function getRandomText() {
    var randomIndex = Math.round(Math.random() * 10);
    var randomString = textArray[randomIndex];
    originalTextElement.textContent = randomString;
}