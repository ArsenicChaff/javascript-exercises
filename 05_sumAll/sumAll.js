const sumAll = function(intOne, intTwo) {
// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

let finalSum = 0;
let largerInt;
let smallerInt;

if ((intOne < 0) || (intTwo < 0)) return 'ERROR';
if (((typeof intOne) != 'number') || ((typeof intTwo) != 'number')) return 'ERROR';

if (intOne < intTwo) {
    smallerInt = intOne;
    largerInt = intTwo;
} else {
    smallerInt = intTwo;
    largerInt = intOne;
}

for (i = smallerInt; i <= largerInt; i++){
    finalSum += i;
}
return finalSum;
};


// Do not edit below this line
module.exports = sumAll;
