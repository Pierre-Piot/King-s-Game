

// Change background-color with an Interval of X

// var backGroundColor = ['#96ceb4', '#ffeead', '#ff6f69', '#ffcc5c'];
//
// function changeBackGroundColor() {
// 	return setInterval(function(){ return randomize(backGroundColor); }
// 	, 10000);
// }
// changeBackGroundColor();
// $('.wrapper.background-color')attr(changeBackGroundColor);

// Define the game
function Game (){
  this.gameOn = true;
	this.player = [];
	this.turn = 0;
	this.rule = undefined;

}

// Give players an avatar
var avatars = ['avatar1.png','avatar2.png', 'avatar3.png', 'avatar4.png', 'avatar5.png', 'avatar6.png'];

function randomAvatar () {
  var index = Math.floor(Math.random() * avatars.length)
  var avatarPath = avatars[index];
  avatars.splice(index, 1);
  return avatarPath;
}

function Player(name, gender, avatar){
	this.name = name;
	this.gender = gender;
	this.drinks = 0;
  this.avatar = avatar;
	this.turn = false;
}


// Get info (N# of players, name, gender) from player
Game.prototype.retrieveData = function (){
  var numberInput = $('#player-number').find(':selected').text();
  for (var i = 0; i < numberInput; i++){
    var name = $('#name' + (i + 1)).val();
    var gender = $('#player-gender' + (i + 1)).val();
    var playerCreated = new Player(name, gender, randomAvatar() );
    this.player.push(playerCreated);

  } console.log(this.player);
};

Game.prototype.drawPlayerInfo = function() {
  this.player.forEach(function(object,index){
    var name = object.name;
    var gender = object.gender;
    var drinks = object.drinks;
    var avatar = object.avatar;
    console.log(name, gender, drinks, avatar);
  });
};

// define randomize function for multi-use
function randomize(thing){
	return Math.floor(Math.random() * thing.length);
}

// define stacks of cards

var stack = [
				{name: "ace1", 		img:"images/cards/black_joker.png", 			rule:13},
				{name: "ace2", 		img:"images/cards/black_joker.png", 			rule:13},
				{name: "ace3", 		img:"images/cards/black_joker.png", 			rule:13},
				{name: "ace4", 		img:"images/cards/black_joker.png",				rule:13},
				{name: "king1", 	img:"images/cards/king_of_spades2.png", 	rule:12},
				{name: "king2", 	img:"images/cards/king_of_hearts2.png", 	rule:12},
				{name: "king3", 	img:"images/cards/king_of_diamonds2.png", rule:12},
				{name: "king4", 	img:"images/cards/king_of_clubs2.png",		rule:12},
				{name: "queen1", 	img:"images/cards/queen_of_spades2.png",	rule:11},
				{name: "queen2", 	img:"images/cards/queen_of_hearts2.png",	rule:11},
				{name: "queen3", 	img:"images/cards/queen_of_diamonds2.png",rule:11},
				{name: "queen4", 	img:"images/cards/queen_of_clubs2.png",		rule:11},
				{name: "jack1", 	img:"images/cards/jack_of_spades2.png",		rule:10},
				{name: "jack2", 	img:"images/cards/jack_of_hearts2.png",		rule:10},
				{name: "jack3", 	img:"images/cards/jack_of_diamonds2.png",	rule:10},
				{name: "jack4", 	img:"images/cards/jack_of_clubs2.png",		rule:10},
				{name: "ten1", 		img:"images/cards/10_of_spades.png",			rule:9},
				{name: "ten2", 		img:"images/cards/10_of_hearts.png",			rule:9},
				{name: "ten3", 		img:"images/cards/10_of_diamonds.png",		rule:9},
				{name: "ten4", 		img:"images/cards/10_of_clubs.png",				rule:9},
				{name: "nine1", 	img:"images/cards/9_of_spades.png",				rule:8},
				{name: "nine2", 	img:"images/cards/9_of_hearts.png",				rule:8},
				{name: "nine3", 	img:"images/cards/9_of_diamonds.png",			rule:8},
				{name: "nine4", 	img:"images/cards/9_of_clubs.png",				rule:8},
				{name: "eight1", 	img:"images/cards/8_of_spades.png",				rule:7},
				{name: "eight2", 	img:"images/cards/8_of_hearts.png",				rule:7},
				{name: "eight3", 	img:"images/cards/8_of_diamonds.png",			rule:7},
				{name: "eight4", 	img:"images/cards/8_of_clubs.png",				rule:7},
				{name: "seven1", 	img:"images/cards/7_of_spades.png",				rule:6},
				{name: "seven2", 	img:"images/cards/7_of_hearts.png",				rule:6},
				{name: "seven3", 	img:"images/cards/7_of_diamonds.png",			rule:6},
				{name: "seven4", 	img:"images/cards/7_of_clubs.png",				rule:6},
				{name: "six1", 		img:"images/cards/6_of_spades.png",				rule:5},
				{name: "six2", 		img:"images/cards/6_of_hearts.png",				rule:5},
				{name: "six3", 		img:"images/cards/6_of_diamonds.png",			rule:5},
				{name: "six4", 		img:"images/cards/6_of_clubs.png",				rule:5},
				{name: "five1", 	img:"images/cards/5_of_spades.png",				rule:4},
				{name: "five2", 	img:"images/cards/5_of_hearts.png",				rule:4},
				{name: "five3", 	img:"images/cards/5_of_diamonds.png",			rule:4},
				{name: "five4", 	img:"images/cards/5_of_clubs.png",				rule:4},
				{name: "four1", 	img:"images/cards/4_of_spades.png",				rule:3},
				{name: "four2", 	img:"images/cards/4_of_hearts.png",				rule:3},
				{name: "four3", 	img:"images/cards/4_of_diamonds.png",			rule:3},
				{name: "four4", 	img:"images/cards/4_of_clubs.png",				rule:3},
				{name: "three1", 	img:"images/cards/3_of_spades.png",				rule:2},
				{name: "three2", 	img:"images/cards/3_of_hearts.png",				rule:2},
				{name: "three3", 	img:"images/cards/3_of_diamonds.png",			rule:2},
				{name: "three4", 	img:"images/cards/3_of_clubs.png",				rule:2},
				{name: "two1", 		img:"images/cards/2_of_spades.png",				rule:1},
				{name: "two2", 		img:"images/cards/2_of_hearts.png",				rule:1},
				{name: "two3", 		img:"images/cards/2_of_diamonds.png",			rule:1},
				{name: "two4", 		img:"images/cards/2_of_clubs.png",				rule:1},
];


// get a random card from Stack when click the stack
function drawRandomCard () {
  return stack[randomize(stack)];
}

function createNextTurn () {
	var totalCounter = 0;
	var counter = 0;
	for (var i = 0; i < game.player.length; i++){
		if (game.player[i].turn === true){
			game.player[i].turn = false;
			counter = i;
			totalCounter += 1;
		}
	}
		if (counter === game.player.length - 1) {
			game.player[0].turn = true;
			$('#msgdisplay').text('Indicate who received the drink(s) with a click on his avatar');
			attributeDrinks();
		} else {
			game.player[counter + 1].turn = true;
			$('#msgdisplay').text('Indicate who received the drink(s) with a click on his avatar');
			attributeDrinks();
	}
}

// give a drink
function attributeDrinks(){
$('#avatarsa img').click(function(event) {
		var target = event.target.id[1]
		event.drinks += 1;
		game.player[target].drinks += 1;
		console.log('drinks',game.player[target].drinks)
		console.log('drinksffhfh',game.player[target])
		console.log('target',target)
		console.log('event',event);
		console.log('event drink',event.target.id[1]);
		alert(event.target.id);
});
}
// Change turn

// interpret number of card
Game.prototype.attributeRule = function(random){
	console.log(random)
switch(random.rule) {
	case 0:
		return false;
	case 1:
			createNextTurn();
			$("#messages").html('Give away one drink');
			break;
  case 2:
			createNextTurn();
			$("#messages").html('Give away one drink');
			break;
  case 3:
  		createNextTurn();
			$("#messages").html('Give away one drink');
			break;
  case 4:
			createNextTurn();
			$("#messages").html('Give away one drink');
			break;
  case 5:
			createNextTurn();
			if (this.player.gender === "FEMALE"){
				this.player.drinks += 1;
			} console.log(this.player.drinks);
			$("#messages").html('Female Players drink');
			break;
  case 6:
			createNextTurn();
			if (this.player.gender === "MALE"){
				this.player.drinks += 1;
				console.log(this.player.drinks);
			}
			$("#messages").text('Male Players drink');
			break;
  case 7:
			createNextTurn();
    	$("#messages").text('Roulette!');
			break;
  case 8:
			createNextTurn();
    	$("#messages").text('Pair-binging (click on your partner)');
			// $( "#P1, #P2, #P3, #P4, #P5, #P6" ).css( "border", "2px solid white")
			// $( "#P1, #P2, #P3, #P4, #P5, #P6" ).html();
			break;
  case 9:
			createNextTurn();
    	$("#messages").text('Never have I ever');
			break;
  case 10:
			createNextTurn();
			$("#messages").text('In-My-Suitcase');
			break;
  case 11:
			createNextTurn();
    	$("#messages").text( 'Queen of thumbs (3 turns)');
			break;
  case 12:
			createNextTurn();
    	$("#messages").text('Invent a rule');
			break;
  case 13:
			createNextTurn();
    	$("#messages").text('Bottom up!');
			game.player.drinks +=1;
			break;
	}
}



var game;

function placePlayersInit (){
	var firstPlayer = game.player[0].avatar;
	$('#P1b').attr("src", 'images/' + firstPlayer);
	for (var i = 0; i < game.player.length; i++){
		var img = game.player[i].avatar
		$('#P' + i).attr("src", 'images/' + img);
		$('#N' + i).html(game.player[i].name);
	}
}

$(document).ready(function(){
  game = new Game();
  $('.btn').click(function(){
    game.retrieveData();
		// alert if number of player not specified
		// alert if number of text entered !== number of players
		placePlayersInit();
		game.player[0].turn = true
    game.drawPlayerInfo();

  });
});

$('#stack' ).click(function() {
	var card = drawRandomCard()
$('#newstack').attr('src', card.img);
	console.log(card.img);
	game.attributeRule(card);
	// assign the rule to a player
	// get the card used out of the game
});
