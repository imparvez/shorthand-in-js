$(document).ready(function(){
	var big = prompt("Enter your number from 1 to 20");
	//Traditional Method
	// if(big > 10) {
	// 	alert("You input is greater than 10");
	// } else {
	// 	alert("You input is less than 10")
	// }

	//Shorthand
	big >= 10 ? alert("You input is greater than 10") : alert("You input is less than 10");
	/*Comparing the input(big) with the pre defined value*/


	var small = window.prompt('Enter your next number');
	small <= 20 ? alert("Number less than 20 or equal to 20") : small >= 30 ? alert("number is less than 30"): alert("number is greater than 30");
	/*Comparing more condition using shorthand for if else chain*/
});