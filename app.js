'use strict';
// Converting a Number to a String

// Write code that will accept a number and convert it to the appropriate string representation.

// Basic Requirements:

// Represent numbers to the hundredth position
// Represent numbers as high as one billion
// Examples:

// Convert 2523.04 to "Two thousand five hundred twenty-three and 04/100"



const _ = require('lodash');

// export your function for testing
module.exports = function higherOrderFunction(args) {
	if ( (!args && args != 0 )|| typeof args !== 'number') {
		return 'Please supply a number!';
	}
	if (args > 1000000000) {
		return 'The number is too big!';
	}

	const origArr = args.toString().split('');
	let integerArr = origArr.slice();
	let decimalArr = [];
	let numStr = '';

	// Storing number text values
	const zero = 'Zero'
	const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const hundred = 'hundred';
	const hundreds = ['', 'thousand', 'million', 'billion'];

	if( origArr.indexOf('.') != -1 ) { 
		integerArr = origArr.slice(0 , origArr.indexOf('.')); //Stores all intergers to the left of the decimal
		decimalArr = origArr.slice(origArr.indexOf('.') + 1); //Stores all numbers to the right of the decimal
	}

	// "Divide up the arry into groups of three. Reversing the array allows for the leading numbers to be 3 digits or less for calculation the hundreds spot"
	integerArr = _.chunk(integerArr.reverse(), 3);

	// Loop through each "chunk" in the array starting from the right because the array is reversed
	// _.forEachRight(integerArr, function(value, i) {
	// 	if (value.length === 3) { // If the chunk has 3 elements then we send it to the hundreds function which will then call the getDoubles function
	// 		numStr = buildString(numStr, getHundreds(value, i))
	// 	} else { // If not 3 then we send it to the getDoubles function
	// 		numStr = buildString(numStr, getDoubles(value, i))
	// 	}
	// });

	let testarr = [];
	testarr = _.map(integerArr.reverse(), function(n, i) {
		if (n.length === 3) {
			return getHundreds(n, integerArr.length - (i +1 ) ).trim()
		} else {
			return getDoubles(n, integerArr.length - (i + 1) ).trim()
		}
	});
	numStr = testarr.filter(Boolean).join(' ');

	// console.log(numStr);

	// Creating decimal fraction value if decimal arr has anything in it
	if (decimalArr.length){
		let numerator = decimalArr.join('');
		let denominator = Math.pow(10, decimalArr.length);

		let decimalStr = numStr.length ? 'and ' : '';
		decimalStr += numerator + '/' + denominator;

		numStr = buildString(numStr, decimalStr);
	}
	
	// Final string return
	return finalString(numStr);


	// Function creation
	// Returns the final text number. Returning a captialed first letter then adding the remaing characters back in. If string is empty return is 'Zero'
	function finalString(origStr) {
		let finalStr = (origStr.charAt(0).toUpperCase() + origStr.slice(1)).trim();
		return finalStr ? finalStr : zero;
	}

	// Building the output string. Checking to see if the string has length and if it does adding a space before the next addtion.
	function buildString(origStr, newStr) {
		return origStr.trim() + (origStr.length ? ' ' : '' ) + newStr;
	};

	// Function to return from the ones
	function getOnes(i){
		return ones[i];
	};

	// Everything goes throught the doubles function to determine the nuances between numbers
	function getDoubles(arr, i){
		let doubleStr = '';
		if (arr[1] == 0 || arr.length == 1) { // If array is only one number ( [5] => five )or the second number is a zero ( [3,0,2] => two) get the single number
			doubleStr = getOnes(arr[0]);
		} else if (arr[1] == 1) { // Checks to see of the first number is a "1" and if so it returns a "teen" ( [6,7,1] => seventeen )
			doubleStr = teens[arr[0]];
		} else { // If not a teen then return the "tens" and get the second number from the ones ( [5,3,2] => Twenty-three ) 
			doubleStr = tens[arr[1] - 2] + (arr[0] != 0 ? '-' + getOnes(arr[0]) : '');
		}
		// Return double string with returend value from getThousands
		return doubleStr + (doubleStr.length ? ' ' : '' ) + getThousand(arr, i);	
	};

	// If the chunked array is three digits long we use the 3rd (last) digit since it is reversed. Three digits mean the number will be a "hundred" number but only if there is not a '0' value in that poistion
	function getHundreds(arr, i){
		return getOnes(arr[2]) + (arr[2] != 0 ? ' ' + hundred + ' ' : '') + getDoubles(arr, i);
	};

	// Based on the index of we are looping over in the integerArr we use it to calculate it's value in the hundred array if the array is not == 0
	function getThousand(arr, j){
		return arr.join('') == 0 ? '' : hundreds[j];
	};
}
