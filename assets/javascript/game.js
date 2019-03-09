
// Create a random variable that is the score to match

// create variables for wins, losses, and playerScore

var wins = 0;
var losses = 0;
var playerScore;
var random;
var crystalArray = [];


startGame();
// ======================================================================
//create function to display numberMatch in html-Done
// create function to add value of crystal to playerScore each time crystal is clicked.-Done
// if there is already a value there, add to it-Done
// if when you add to it the value is > random ++ Losses -Done
// if when you add to it the value is = to random ++ wins -Done

function startGame() {

  random = Math.floor(Math.random()*(101)+19);
  $("#numberMatch").text(random);
  console.log(random);
  crystalArray = [];
  for (i = 0; i < 4; i++) {
      var crystal = Math.floor(Math.random()*(12)+1);
      crystalArray.push(crystal);
  }
  console.log(crystalArray);
  playerScore = 0;
  $("#playerScore").text(playerScore);
  $("#wins").text(wins);
  $("#losses").text(losses);
}


$(".crystal").on("click",function() {
  var crystalIndex = parseInt($(this).val());
  playerScore += crystalArray[crystalIndex];
  $("#playerScore").text(playerScore);
  verdict();
})

function verdict () {
    if (playerScore === random) {
        wins++;
        $("#wins").text(wins);
        startGame();
    } else if (playerScore > random) {
        losses++;
        $("#losses").text(losses);
        startGame();
    }
}















// var random = Math.floor(Math.random()*101+19);
//   console.log (random);
//
// var crystal1 = Math.floor(Math.random()*11+1);
// var crystal2 = Math.floor(Math.random()*11+1);
// var crystal3 = Math.floor(Math.random()*11+1);
// var crystal4 = Math.floor(Math.random()*11+1);
//

// $("#numberMatch").text(random);

      //
      // $("#crystal1").on("click",function(){
      //   playerScore += crystal1;
      // $("#playerScore").text(playerScore);
      //     console.log (crystal1);
      //     if (playerScore > random){ ++ losses;
      //     $("#losses").text("Losses: "+ losses);
      //     $("#resultsMessage").text("You Lost!")
      //   }else if(playerScore === random){ ++wins;
      //     $("#wins").text("Wins: "+ wins);
      //     $("#resultsMessage").text("You Won!")
      //       startGame();
      //   };
      // });
      //
      // $("#crystal2").on("click",function(){
      //   playerScore += crystal2;
      // $("#playerScore").text(playerScore);
      //     console.log (crystal2);
      //     if (playerScore > random){ ++ losses;
      //     $("#losses").text("Losses: "+ losses);
      //     $("#resultsMessage").text("You Lost!")
      //   }else if(playerScore === random){ ++wins;
      //     $("#wins").text("Wins: "+ wins);
      //     $("#resultsMessage").text("You Won!")
      //       startGame();
      //   };
      // });
      //
      // $("#crystal3").on("click",function(){
      //   playerScore += crystal3;
      // $("#playerScore").text(playerScore);
      //     console.log (crystal3);
      //     if (playerScore > random){ ++ losses;
      //     $("#losses").text("Losses: "+ losses);
      //     $("#resultsMessage").text("You Lost!")
      //   }else if(playerScore === random){ ++wins;
      //     $("#wins").text("Wins: "+ wins);
      //     $("#resultsMessage").text("You Won!")
      //       startGame();
      //   };
      // });
      //
      // $("#crystal4").on("click",function(){
      //   playerScore += crystal4;
      // $("#playerScore").text(playerScore);
      //     console.log (crystal4);
      //     if (playerScore > random){ ++ losses;
      //     $("#losses").text("Losses: "+ losses);
      //     $("#resultsMessage").text("You Lost!")
      //   }else if(playerScore === random){ ++wins;
      //     $("#wins").text("Wins: "+ wins);
      //     $("#resultsMessage").text("You Won!")
      //       startGame();
      //   };
      // });

// function reset(){
//
// var random = Math.floor(Math.random()*101+19);
//     console.log (random);
//
//
// var crystal1 = Math.floor(Math.random()*11+1);
// var crystal2 = Math.floor(Math.random()*11+1);
// var crystal3 = Math.floor(Math.random()*11+1);
// var crystal4 = Math.floor(Math.random()*11+1);
//
// $("#numberMatch").text(random);
//
// }
  // if score is > playerScore, then ++ Losses - Done
  // else if playerScore == numberMatch ++ Wins - Done

// create a reset function that is triggered whenever ++ wins or ++ Losses
