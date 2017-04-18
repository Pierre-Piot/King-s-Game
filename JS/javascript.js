

// Change background-color with an Interval of X

var backGroundColor = ['#96ceb4', '#ffeead', '#ff6f69', '#ffcc5c'];

function changeBackGroundColor() {
	return setInterval(function(){ return randomize(backGroundColor); }
	, 10000);
}
changeBackGroundColor();


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
  console.log(index);
  avatars.splice(index, 1);
  console.log(avatars);
  return avatarPath;
}

function Player(name, gender, avatar){
	this.name = name;
	this.gender = gender;
	this.drinks = 0;
  this.avatar = avatar;
}


// Get info (N# of players, name, gender) from player
Game.prototype.retrieveData = function (){
  var numberInput = $('#player-number').find(':selected').text();
  console.log(numberInput);
  for (var i = 0; i < numberInput; i++){
    var name = $('#name' + (i + 1)).val();
    console.log(name);
    var gender = $('#player-gender' + (i + 1)).val();
    console.log(gender);
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

// var randomCard = drawRandomCard();



// interpret number of card
Game.prototype.attributeRule = function(random){
	console.log(random)
switch(random.rule) {
	case 0:
		return false;
	case 1:
			$("#messages").text('Give away one drink');
  case 2:
  console.log(this)
  		$("#messages").text('Give away one drink');
  console.log(this)
  case 3:
  console.log(this)
			$("#messages").text('Give away one drink');
  case 4:
			$("#messages").text('Give away one drink');
  case 5:
			if (this.player.gender === "FEMALE"){
				this.player.drinks += 1;
			}
			$("#messages").text('Female Players drink');
  case 6:
			if (this.player.gender === "MALE"){
				this.player.drinks += 1;
			}
			$("#messages").text('Male Players drink');
  case 7:
    	$("#messages").text('Roulette!');
  case 8:
    	$("#messages").text('Pair-binging (click on your partner)');
			// $( "#P1, #P2, #P3, #P4, #P5, #P6" ).css( "border", "2px solid white")
			// $( "#P1, #P2, #P3, #P4, #P5, #P6" ).html();
  case 9:
    	return 'Never have I ever';
  case 10:
    	return 'In-My-Suitcase';
  case 11:
    	return 'Queen of thumbs (3 turns)';
  case 12:
    	return 'Invent a rule';
  case 13:
    	return 'Bottom up!';
	}
}

// assign the rule to a player
// get the card used out of the game

var game;
var player1;

$(document).ready(function(){
  game = new Game();
	player1 = new Player();
  $('.btn').click(function(){
    game.retrieveData();
    game.drawPlayerInfo();
  });

});

$('#stack' ).click(function() {
	var card = drawRandomCard()
$('#newstack').attr('src', card.img);
	console.log(card.img);
	game.attributeRule(card);
})
