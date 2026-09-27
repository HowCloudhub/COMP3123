// Lab 1.
//COMP 3123
//Munir Howlader
//ID 101172332

'use strict';

//Exercise 1
//Capitalize the first letter of a sentence.
console.log("#####################")
console.log("Exercise 1")


function capitalize(string) {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
let input = "the quick brown fox.";
console.log(capitalize(input));


// Note to self.  for future review.
//.split(' ') Splits the string at every space, turning it into an array of individual words
// .map(...) function loops through that array word-by-word, capitalizes the first letter (index 0), Use .slice(1) to grabs the remaining letters and concat them back together.
// .join(' ') Collects all those modified words from every iteration, joint them back into a single string with spaces in between, and returns the final result


//Exercise 2.
console.log("#####################")
console.log("#####################")
console.log("Exercise 2")

//Write a function to find the largest of 3 numbers.

function max(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(max(100,99,88))


//Exercise 3.
console.log("#####################")
console.log("#####################")
console.log("Exercise 3")
//Write a function to move the last three characters of a string to the first. And only process this if there are at least 3 characters.

function flipFlop (string){
    if(string.length >= 3){
        return string.slice(-3) + string.slice(0,-3);
        }
    return string;
}

console.log(flipFlop("Fantastic"))
console.log(flipFlop("Hello"))
console.log(flipFlop("Do"))


//Exercise 4.
console.log("#####################")
console.log("#####################")
console.log("Exercise 4")
//Find the types of given angle.
// • Acute angle: An angle between 0 and 90 degrees.
// • Right angle: An 90 degree angle.
// • Obtuse angle: An angle between 90 and 180 degrees.
// • Straight angle: A 180 degree angle.

function angleFinder (number) {
    if (number >0 && number < 90){
        return "Acute angle";
    }
    else if (number === 90){
        return "Right angle";
    }
    else if (number > 90 && number < 180){
        return "Obtuse angle";
    }
    else if (number === 180){
        return "Straight angle";
    }
    else{
        return "Input a number between 1 and 180";
    }
}


console.log(angleFinder(55));
console.log(angleFinder(90));
console.log(angleFinder(180));
console.log(angleFinder(181));
console.log(angleFinder(0));
console.log(angleFinder(91));