// const removeFromArray = function(array, ...numbers) {
//     let charInputArray = numbers;
//     let posIfInArray = 1;
//     for (i = 0, n = charInputArray.length; i < n; i++) {
//         posIfInArray = array.indexOf(charInputArray[i]);
//         while (posIfInArray != -1) {
//             if (posIfInArray === -1) {
//                 return;
//             } else {
//             array.splice(posIfInArray, 1)
//             posIfInArray = array.indexOf(charInputArray[i]);
//             // console.log(posIfInArray);
//             }
//         }
//     return array;
//     }
// };

const removeFromArray = function(array, ...numbers) {
    let lenInputArray = array.length;
    // console.log(lenInputArray);
    let charInputArray = numbers;
    // console.log(charInputArray);
    let posIfInArray = 99;
    for (i = 0, n = charInputArray.length; i < n; i++) {
        posIfInArray = array.indexOf(charInputArray[i]);  //checks if the value is in the input array
        console.log(posIfInArray);   //stores positional index in reference to input array
        if (posIfInArray > -1) {
            array.splice(posIfInArray, 1)
            let check = array.indexOf(charInputArray[i]);
            if (check > -1) {
                array.splice(posIfInArray, 1)
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;