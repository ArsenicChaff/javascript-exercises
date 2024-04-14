const sumAll = function(intOne, intTwo) {
// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
let finalSum = 0;
for (i = intOne; i <= intTwo; i++){
    finalSum += i;
}
return finalSum;
};


// sumAll(1, 5);


// Do not edit below this line
module.exports = sumAll;
