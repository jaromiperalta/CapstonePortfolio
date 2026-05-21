/*
This is your silly sentence:

My :recentHolidayYouCelebrated: was so strange... first, I ran out of :pluralNoun:, and when
I went to go get more at the store down the street, a :weirdVehicleOrShip: almost ran me over!

The words you will be asking the user for are: 
1. a recent holiday you celebrated
2. a plural noun
3. a weird vehicle or ship

*/

// part 1
// link this script file in the HTML file (with the defer attribute)
// alert("Spiderman");

// part 2
// ask the user for each word and store them in variables:
const recentholiday = prompt("Give me a recent holiday you celebrated.");
const pluralnoun = prompt("Give me a plural noun.");
const weirdvehicle = prompt("Give me a weird vehicle or ship.");


// part 3
// store the silly sentence in a variable using a template literal, and insert the variables from above:
let sillySentence = `My ${recentholiday} was so strange... first, I ran out of ${pluralnoun}, and when
I went to go get more at the store down the street, a ${weirdvehicle} almost ran me over!`;




// part 4
// look at the HTML file, find the element that we are going to be storing the sentence in.
// store the silly sentence in its innerHTML:
document.getElementById("madLib").innerHTML = sillySentence;


