
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];


function viewStudentStats(id, toggle)
{
	if(toggle == 0)
	{
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.height="0px";
	}
	else
	{
		document.getElementById(id).style.visibility = "visible";
		document.getElementById(id).style.height="auto";
	}
}


function changeColor(color)
{
	document.body.style.background = color;
}

function loadStatsPage()
{
	var table = document.getElementById("stats_table");
	var table1 = document.getElementById("wins");
	var table2=document.getElementById("losses");
	var row_counter;
	var loss_counter =0;
	var score_One;
	var score_Two;
	var win_counter = 0;
	var win_loss;

	for(row_counter = 2; row_counter < table.rows.length; row_counter++)
	{//Outer for loop iterates over each row
			score_One = parseInt(document.getElementById("stats_table").rows[row_counter].cells[2].innerHTML);
			score_Two = parseInt(document.getElementById("stats_table").rows[row_counter].cells[3].innerHTML);
			if(score_One > score_Two)
			{
				win_counter += 1;
				win_loss = "Win";
			}
			else
			{
				loss_counter += 1;
				win_loss ="Loss";
			}
			table.rows[row_counter].cells[4].innerHTML = win_loss;
	}
	table1.innerHTML = win_counter;
	table2.innerHTML = loss_counter;
}
function loadPlayersPage()
{
	var selectionText = "";
	for(var player_i =0; player_i < players.length; player_i++)
	{
		selectionText+= '<a href="#" onclick="switchPlayers(' + player_i +')" > ' + players[player_i].name + '</a><br/>'
	}
	document.getElementById("player_selector").innerHTML = selectionText;
}
function switchPlayers(playerNum) {
	document.getElementById("p_year").innerHTML = players[playerNum].year;
	document.getElementById("p_major").innerHTML = players[playerNum].major;
	document.getElementById("g_played").innerHTML = players[playerNum].games_played;
	document.getElementById("player_img").innerHTML =players[playerNum].alt;
	document.getElementById("p_yards").innerHTML = players[playerNum].pass_yards;
	document.getElementById("r_yards").innerHTML = players[playerNum].rushing_yards;
	document.getElementById("rec_yards").innerHTML = players[playerNum].receiving_yards;

	var passing = parseInt(document.getElementById("p_yards").innerHTML);
	var games = parseInt(document.getElementById("g_played").innerHTML);
	var rush = parseInt(document.getElementById("r_yards").innerHTML);
	var rec = parseInt(document.getElementById("rec_yards").innerHTML);
	var avgP = passing/games;
	var avgR = rush/games;
	var aveRe = rec/games;

	document.getElementById("avg_p_yards").innerHTML = Math.round(avgP);
	document.getElementById("avg_r_yards").innerHTML = Math.round(avgR);
	document.getElementById("avg_rec_yards").innerHTML = Math.round(aveRe);
}

				

