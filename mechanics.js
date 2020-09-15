
// This approach is similar to the one described in lecture. The DOM is modified to add the game function when the button is clicked.

document.getElementById('test').onclick = function(){

// generates Random Number (Approach Found on w3 schools https://www.w3schools.com/js/js_random.asp)
	let num = Math.floor(Math.random() *3);


// Generates the computer's move using the Random Number
        let potential_moves=['Rock', 'Paper', 'Scissors'];
	let computer_move=potential_moves[num];
	
	console.log("This should display in the console.");
	
// Reads the user's move. Defaults to 'nothing'.
	let user_move="nothing"
	if (document.getElementById("Rock").checked){
		user_move="Rock";
	}
	if (document.getElementById("Paper").checked){
		user_move="Paper";
	}
	if (document.getElementById("Scissors").checked){
		user_move="Scissors";
	}
	console.log(user_move);


// Determines the outcome. Defaults to no move inputted
let outcome="Invalid Selection: Please Select Either Rock, Paper or Scissors!";
	if (computer_move.valueOf() == user_move.valueOf()){
		outcome="Draw!";
	}	
	
	if ( computer_move.valueOf() == "Scissors" && user_move.valueOf()=="Rock" || computer_move.valueOf() == "Rock" && user_move.valueOf()=="Scissors"){
	        outcome="Rock Beats Scissors!";
		if (user_move.valueOf()=="Rock"){
			outcome+="<br>You Win";
		}
		else{
			outcome+="<br>You Lose";
		}
	}

	if ( computer_move.valueOf() == "Paper" && user_move.valueOf()=="Rock" || computer_move.valueOf() == "Rock" && user_move.valueOf()=="Paper"){
        	outcome="Paper Beats Rock!!";
        	if (user_move.valueOf()=="Paper"){
        	        outcome+="<br>You Win";
        	}       
        	else{
			outcome+="<br>You Lose";
        	}

	}

	if ( computer_move.valueOf() == "Scissors" && user_move.valueOf()=="Paper" || computer_move.valueOf() == "Paper" && user_move.valueOf()=="Scissors"){
        	outcome="Scissors beats Paper!!";
		if (user_move.valueOf()=="Scissors"){
                	outcome+="<br>You Win";
		}
        	else{
			outcome+="<br>You Lose";
        	}
	}

// With the outcome established, it is displayed by modifiying the innerHTML of the DIV
	document.getElementById("Results").innerHTML='<h1>Results</h1>Computer Move='+computer_move+"<br>Your Move="+user_move+"<br>"+outcome;


}

