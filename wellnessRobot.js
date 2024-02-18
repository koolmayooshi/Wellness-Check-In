
const userName= prompt("What is your name?");

function nameDisplay(){

    if (userName.length>=0){
        document.getElementById('header').innerHTML = "Welcome home, "+ userName+ ' \uD83D\uDC9A';
    }

}

nameDisplay();


const audio = document.getElementById("myAudio");
const button = document.getElementById("playButton");

button.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    button.textContent = "Stop Audio";
  } else {
    audio.pause();
    button.textContent = "Play Audio";
  }
});




// var name= userName;
var distressResponse= 'I understand ' +userName + ', take a deep breath and remember that you are not alone.' ;
var distressResponse2= 'Here is a quote to better your day!'
//
var sadResponse= 'Aww '+userName + ', I\'m sorry to hear that.';
var sadResponse2 = 'Here is a quote to brighten up your day!';
//3 emojis response:
var midResponse= 'Hang in there, '+userName + '. ';
var midResponse2 = 'Here is an uplifting quote and to help turn your day around!';
//4-5 emojis response:
var happyResponse= 'Cheer up, '+userName + '. ' ;
var happyResponse2= 'Let\'s sprinkle some joy into your day with this inspiring quote!'
//
var elatedResponse= 'That\'s fantastic, '+userName + '! Happy to hear you are great.';
var elatedResponse2 = 'Keep up with the positive energy with this quotes!';



// motivational quotes

function displayMotivalQuotes(){

    var motivationalQuote=[" \"There are always flowers for those who want to see them.\"",
    " \"A happy life is one spent in learning, earning, and yearning.\"", 
    " \"Be happy for this moment. This moment is your life.\"", 
    " \"Happiness is a choice that requires effort at times.\"", 
    " \"Whoever is happy will make others happy too.\"", 
    " \"The way I see it, if you want the rainbow, you gotta put up with the rain!\"",
    " \"Joy is not in things; it is in us.\"", 
    " \"Happiness is a journey, not a destination.\"", 
    " \"You don't have to be happy every second to be happy overall.\"",
    " \"People are just as happy as they make up their minds up.\"",
    " \"IF YOU WANT TO BE HAPPY, BE.\"",
    " \"Stop chasing after the wrong things and start chasing after the right things.\"",
    " \"Happiness is a state of mind. It's according to the way you look at things.\"",
    " \"A good laught and a long sleep are the best cures in the doctor's book.\"",
    " \"Wellness is the complete intergration of body, mind, and spirit - the realization that everything we do, think, feel, and believe has an effect on our state of well-being.\"",
    " \"The best way to cheer yourself is to try to cheer someone else up.\""];
    

    var randomQuote = motivationalQuote[Math.floor(Math.random() * motivationalQuote.length)];
    console.log(randomQuote);
    let mQuote='';

    
    /*for (i=0; i < motivationalQuote.length; i++){
        if (userName.length===i){
            mQuote= motivationalQuote[i]
        }
        else if{
            i++
            1
        }
        else{
            i=0
        }
        
        

        
        // console.log(motivationalQuote[i]);
        
    };*/
    return randomQuote

}
displayMotivalQuotes();

    


//things to do

var activity1='When one is downhearted or super sad, it is best to take a walk.'
var activity2='When one is in a sorrow mood, taking a nap can be a soothing remedy.'
var activity3='When one is neither happy or sad, but in the middle, it is best to get some work done.'
var activity4='When one is happy, it is good to bake.'
var activity5='When one is overjoyed, indulging in an interesting activity like reading can enhance the experience.'


function Function1() {
    document.getElementById('textBox1').innerHTML = distressResponse + ' '+ activity1 +" " + distressResponse2+ ' '+displayMotivalQuotes();
   //aalert(distressResponse + ' '+ activity1);
    // displayMotivalQuotes();
}

function Function2(){
    document.getElementById('textBox1').innerHTML = sadResponse + ' '+ activity2 + ' ' + sadResponse2+ ' '+displayMotivalQuotes();
   //aalert(sadResponse + '  '+ );
    displayMotivalQuotes();
     
}

function Function3(){
    document.getElementById('textBox1').innerHTML = midResponse + ' '+ activity3 + ' ' + midResponse2+ ' '+displayMotivalQuotes();
    displayMotivalQuotes();
     
}

function Function4(){
    document.getElementById('textBox1').innerHTML = happyResponse + ' '+ activity4 + ' ' + happyResponse2+ ' '+displayMotivalQuotes();
    displayMotivalQuotes();
     
}

function Function5(){
    document.getElementById('textBox1').innerHTML = elatedResponse + ' '+ activity5 + ' ' + elatedResponse2+ ' '+displayMotivalQuotes();
    displayMotivalQuotes();
}













//console.log('hi')
// console.log("Welcome home", userName, '💚')