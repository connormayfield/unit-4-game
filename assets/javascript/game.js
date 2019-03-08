
$( document ).ready(function(){


// Create a random variable that is the score to match
var random = Math.floor(Math.random()*101+19);
  console.log (random);

// create variables for wins, losses, and playerScore

  var wins = 0;
  var losses = 0;
  var playerScore = 0;

  var crystal1 = Math.floor(Math.random()*11+1);
  var crystal2 = Math.floor(Math.random()*11+1);
  var crystal3 = Math.floor(Math.random()*11+1);
  var crystal4 = Math.floor(Math.random()*11+1);
// ======================================================================
//create function to display numberMatch in html
$("#numberMatch").text(random);
// create functions to add value of crystal to playerScore when clicked (onclick for each one)
  // if score is > playerScore, then ++ Losses
  // else if playerScore == numberMatch ++ Wins

// create a reset function that is triggered whenever ++ wins or ++ Losses


$("wins").text(wins);
$("losses").text(losses);























})
