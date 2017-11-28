//list of functions and things to add to the window to make my life easier

// added isFunction, numberWithCommas, p_round, today - 20160926

//random integer between floor and ceil
window.rand = function(floor, ceil)
{
	return Math.floor((Math.random() * (ceil - floor + 1)) + floor);
};

//random float between floor and ceil
window.randF = function (floor, ceil)
{
	return (Math.random() * (ceil - floor + 1)) + floor;
};

//add pi as variable instead of Math.PI
window.pi = Math.PI;

// Check if obj is a function
//from Underscore.js 
// http://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
window.isFunction = function(obj) {
  return (obj && obj.constructor && obj.call && obj.apply);
};

//precision round number to precision decimal places
window.p_round = function(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};

//add commas at thousands separators with regex
window.numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// returns formatted date
// ie September 26, 2016
window.today = function() {
	var monthNames = [
	  "January", "February", "March",
	  "April", "May", "June", "July",
	  "August", "September", "October",
	  "November", "December"
	];

	var date = new Date();
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	return monthNames[monthIndex] + ' ' + day + ', ' + year;
}