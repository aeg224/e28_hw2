
// This approach is similar to the one described in lecture. The DOM is modified to add the game function when the button is clicked.

document.getElementById('test').onclick = function(){
	let potential_moves=['Rock', 'Paper', 'Scissors'];

// generates Random Number (Approach Found on w3 schools https://www.w3schools.com/js/js_arrays.asp)
	let num = Math.floor(Math.random() *3);
	console.log("THis is a test");
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
	let computer_move=potential_moves[num];


let outcome="";

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

//This approach is similar to the ones described in lecture. The inner HTML is modified according to the div ID.
document.getElementById("Results").innerHTML='<h1>Results</h1>Computer Move='+computer_move+"<br>Your Move="+user_move+"<br>"+outcome;


}

