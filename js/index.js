// The quotes Array with words by author Nils Domin
var array = ['"Open your heart, smile every day, as often as possible."','"True friends you realize when you think you have lost everything. Then they are there and show yout hat you are mistaken."','"Some people place signs. Signs that can be understood in any language, because pictures speak a thousand words, no matter where in the world."','"It is hard to act on the mind, if the heart seems to be much stronger."','"Freedom is a fundamental right for all, it should not be restricted, by nothing or nobody."','"Freedom, my beloved people, you already have! But you give it away, by your own narrowness."','"The only thing you need, is your faith - it moves all mountains and gives you back your forgotten power."','"Open your eyes, you have everything you need. You were all in the cradle, you just have to trust."','"Trust yourself, because it is all there! Let it guide you, and you can find the way."','"Just be you."'];

// Fetch blockquote container
var quote = document.getElementById('quote');

// Variable for click on "More"-Button 
var click = document.getElementById('click');

// Function to get random quote from array
var randomQuote = function(){
  var arrIndex = Math.floor(Math.random()*array.length);
  quote.innerHTML = array[arrIndex];
  
// Tweet the quote
var twitter = document.getElementById('twitter');
twitter.href = "https://twitter.com/intent/tweet?text=" + encodeURI(array[arrIndex]) + "\n - Nils Domin";

};

// Show random quote
randomQuote();
// Click on More-button shows new random quote
click.addEventListener('click', randomQuote, false);