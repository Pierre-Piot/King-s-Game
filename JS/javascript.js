

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
var cardStack = [];
for (var i = 0; i < 53; i++){
	cardStack.push(i);
}

var stack = [
				{name: "king1", 	img:"images/cards/king_of_spades2.png", 	rule:13},
				{name: "king2", 	img:"images/cards/king_of_hearts2.png", 	rule:13},
				{name: "king3", 	img:"images/cards/king_of_diamonds2.png" 	rule:13},
				{name: "king4", 	img:"images/cards/king_of_clubs2.png"			rule:13},
				{name: "queen1", 	img:"images/cards/queen_of_spades2.png"		rule:12},
				{name: "queen2", 	img:"images/cards/queen_of_hearts2.png"		rule:12},
				{name: "queen3", 	img:"images/cards/queen_of_diamonds2.png"	rule:12},
				{name: "queen4", 	img:"images/cards/queen_of_clubs2.png"		rule:12},
				{name: "jack1", 	img:"images/cards/jack_of_spades2.png"		rule:11},
				{name: "jack2", 	img:"images/cards/jack_of_hearts2.png"		rule:11},
				{name: "jack3", 	img:"images/cards/jack_of_diamonds2.png"	rule:11},
				{name: "jack4", 	img:"images/cards/jack_of_clubs2.png"			rule:11},
				{name: "ten1", 		img:"images/cards/10_of_spades.png"				rule:10},
				{name: "ten2", 		img:"images/cards/10_of_hearts.png"				rule:10},
				{name: "ten3", 		img:"images/cards/10_of_diamonds.png"			rule:10},
				{name: "ten4", 		img:"images/cards/10_of_clubs.png"				rule:10},
				{name: "nine1", 	img:"images/cards/9_of_spades.png"				rule:9},
				{name: "nine2", 	img:"images/cards/9_of_hearts.png"				rule:9},
				{name: "nine3", 	img:"images/cards/9_of_diamonds.png"			rule:9},
				{name: "nine4", 	img:"images/cards/9_of_clubs.png"					rule:9},
				{name: "eight1", 	img:"images/cards/8_of_spades.png"				rule:8},
				{name: "eight2", 	img:"images/cards/8_of_hearts.png"				rule:8},
				{name: "eight3", 	img:"images/cards/8_of_diamonds.png"			rule:8},
				{name: "eight4", 	img:"images/cards/8_of_clubs.png"					rule:8},
				{name: "seven1", 	img:"images/cards/7_of_spades.png"				rule:7},
				{name: "seven2", 	img:"images/cards/7_of_hearts.png"				rule:7},
				{name: "seven3", 	img:"images/cards/7_of_diamonds.png"			rule:7},
				{name: "seven4", 	img:"images/cards/7_of_clubs.png"					rule:7},
				{name: "six1", 		img:"images/cards/6_of_spades.png"				rule:6},
				{name: "six2", 		img:"images/cards/6_of_hearts.png"				rule:6},
				{name: "six3", 		img:"images/cards/6_of_diamonds.png"			rule:6},
				{name: "six4", 		img:"images/cards/6_of_clubs.png"					rule:6},
				{name: "five1", 	img:"images/cards/5_of_spades.png"				rule:5},
				{name: "five2", 	img:"images/cards/5_of_hearts.png"				rule:5},
				{name: "five3", 	img:"images/cards/5_of_diamonds.png"			rule:5},
				{name: "five4", 	img:"images/cards/5_of_clubs.png"					rule:5},
				{name: "four1", 	img:"images/cards/4_of_spades.png"				rule:4},
				{name: "four2", 	img:"images/cards/4_of_hearts.png"				rule:4},
				{name: "four3", 	img:"images/cards/4_of_diamonds.png"			rule:4},
				{name: "four4", 	img:"images/cards/4_of_clubs.png"					rule:4},
				{name: "three1", 	img:"images/cards/3_of_spades.png"				rule:3},
				{name: "three2", 	img:"images/cards/3_of_hearts.png"				rule:3},
				{name: "three3", 	img:"images/cards/3_of_diamonds.png"			rule:3},
				{name: "three4", 	img:"images/cards/3_of_clubs.png"					rule:3},
				{name: "two1", 		img:"images/cards/2_of_spades.png"				rule:2},
				{name: "two2", 		img:"images/cards/2_of_hearts.png"				rule:2},
				{name: "two3", 		img:"images/cards/2_of_diamonds.png"			rule:2},
				{name: "two4", 		img:"images/cards/2_of_clubs.png.png"			rule:2},
];


// get a random card from Stack when click the stack
function drawRandomCard () {
  return stack[randomize(stack)];
}

var randomCard = drawRandomCard();

	$('#stack' ).click(function() {
	$('#newstack').attr('src', drawRandomCard().img);
	  console.log(drawRandomCard().img);
})


// interpret number of card
function compareValue (cardClass){
switch(cardClass) {
	case 0:
		return false;
	case 1:
  	return 'rule 1';
  case 2:
    return 'rule 2';
  case 3:
    return 'rule 3';
  case 4:
    	return 'rule 4';
  case 5:
    	return 'rule 5';
  case 6:
    	return 'rule 6';
  case 7:
    	return 'rule 7';
  case 8:
    	return 'rule 8';
  case 9:
    	return 'rule 9';
  case 10:
    	return 'rule 10';
  case 11:
    	return 'rule 11';
  case 12:
    	return 'rule 12';
  case 13:
    	return 'rule 13';
	}
}

compareValue(cardClass);

// assign the rule to a player


// get the card used out of the game
//

function Card (){
	this.value = value
	this.class = Math.ceil(this.value )
}




$(document).ready(function(){
  var game = new Game();
  $('.btn').click(function(){
    game.retrieveData();
    game.drawPlayerInfo();
  });


});
