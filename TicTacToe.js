$(document).ready(function () {
    "use strict";
    var turn = false, player, topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight, gameRunning = 1;
  
  if (gameRunning === 0) {
    $("#topLeft").click(topLeft);
    $("#topMid").click(topMid);
    $("#topRight").click(topRight);
    $("#midLeft").click(midLeft);
    $("#midMid").click(midMid);
    $("#midRight").click(midRight);
    $("#botLeft").click(botLeft);
    $("#botMid").click(botMid);
    $("#botRight").click(botRight);
  } else {
    $("a.buttonTTT").click(
        function (event) {
            if (event.target.innerHTML === "") {
                turn = turn ? false : true;
            
            $("#displayParagraph").text(" ");
            event.target.innerHTML = turn ? "X" : "O";
              
            if (event.target.id === "topLeft") {
                topLeft = event.target.innerHTML;
                }
            if (event.target.id === "topMid") {
                topMid = event.target.innerHTML;
                }
            if (event.target.id === "topRight") {
                topRight = event.target.innerHTML;
                }
            if (event.target.id === "midLeft") {
                midLeft = event.target.innerHTML;
                }
            if (event.target.id === "midMid") {
                midMid = event.target.innerHTML;
                }
            if (event.target.id === "midRight") {
                midRight = event.target.innerHTML;
                }
            if (event.target.id === "botLeft") {
                botLeft = event.target.innerHTML;
                }
            if (event.target.id === "botMid") {
                botMid = event.target.innerHTML;
                }
            if (event.target.id === "botRight") {
                botRight = event.target.innerHTML;
                }
              
            if (event.target.innerHTML === "X") {
                player = 2;
              } else {
                player = 1;
              }
              
            if (topLeft === topMid && topMid === topRight) {
              if (topLeft === "X") {
                $("#displayParagraph").text("Congratulations, X wins! ... now don't touch anything.");
                gameRunning = 0;
              }
              if (topLeft === "O") {
                $("#displayParagraph").text("Congratulations, O wins! ... now don't touch anything.");
                gameRunning = 0;
              }
            } else if (midLeft === midMid && midMid === midRight) {
              if (midLeft === "X") {
                $("#displayParagraph").text("Congratulations, X wins! ... now don't touch anything.");
                gameRunning = 0;
              } 
              if (midLeft === "O") {
                $("#displayParagraph").text("Congratulations, O wins! ... now don't touch anything.");
                gameRunning = 0;
              }
            } else if (botLeft === botMid && botMid === botRight) {
              if (botLeft === "X") {
                $("#displayParagraph").text("Congratulations, X wins! ... now don't touch anything.");
                gameRunning = 0;
              } 
              if (botLeft === "O") {
                $("#displayParagraph").text("Congratulations, O wins! ... now don't touch anything.");
                gameRunning = 0;
              }
            } else if (topLeft === midMid && midMid === botRight) {
              if (topLeft === "X") {
                $("#displayParagraph").text("Congratulations, X wins! ... now don't touch anything.");
                gameRunning = 0;
              } 
              if (topLeft === "O") {
                $("#displayParagraph").text("Congratulations, O wins! ... now don't touch anything.");
                gameRunning = 0;
              }
            } else if (topRight === midMid && midMid === botLeft) {
              if (topRight === "X") {
                $("#displayParagraph").text("Congratulations, X wins! ... now don't touch anything.");
                gameRunning = 0;
              } 
              if (topRight === "O") {
                $("#displayParagraph").text("Congratulations, O wins! ... now don't touch anything.");
                gameRunning = 0;
              }
            } else if (topLeft === midLeft && midLeft === botLeft) {
              if (topLeft === "X") {
                $("#displayParagraph").text("Congratulations, X wins! ... now don't touch anything.");
                gameRunning = 0;
              } 
              if (topLeft === "O") {
                $("#displayParagraph").text("Congratulations, O wins! ... now don't touch anything.");
                gameRunning = 0;
              }
            } else if (topMid === midMid && midMid === botMid) {
              if (topMid === "X") {
                $("#displayParagraph").text("Congratulations, X wins! ... now don't touch anything.");
                gameRunning = 0;
              } 
              if (topMid === "O") {
                $("#displayParagraph").text("Congratulations, O wins! ... now don't touch anything.");
                gameRunning = 0;
              }
            } else if (topRight === midRight && midRight === botRight) {
              if (topRight === "X") {
                $("#displayParagraph").text("Congratulations, X wins! ... now don't touch anything.");
                gameRunning = 0;
              } 
              if (topRight === "O") {
                $("#displayParagraph").text("Congratulations, O wins! ... now don't touch anything.");
                gameRunning = 0;
              }
            } else if (topLeft && topMid && topRight && midLeft && midMid && midRight && botLeft && botMid && botRight != "") {
              $("#displayParagraph").text("You tied! ... now don't touch anything.");
                gameRunning = 0;
            } else {
              $("#displayParagraph").text("It is player " + player + "'s turn");
            }
            }
        }
        
    );
  }
    
// .click functions for 3x3 grid buttons

});