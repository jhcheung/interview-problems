// A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

// You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

// If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.

// Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).

// Example

// For crypt = ["SEND", "MORE", "MONEY"] and

// solution = [['O', '0'],
//             ['M', '1'],
//             ['Y', '2'],
//             ['E', '5'],
//             ['N', '6'],
//             ['D', '7'],
//             ['R', '8'],
//             ['S', '9']]

// the output should be
// isCryptSolution(crypt, solution) = true.

// When you decrypt "SEND", "MORE", and "MONEY" using the mapping given in crypt, you get 9567 + 1085 = 10652 which is correct and a valid arithmetic equation.

// For crypt = ["TEN", "TWO", "ONE"] and

// solution = [['O', '1'],
//             ['T', '0'],
//             ['W', '9'],
//             ['E', '5'],
//             ['N', '4']]

// the output should be
// isCryptSolution(crypt, solution) = false.

// Even though 054 + 091 = 145, 054 and 091 both contain leading zeroes, meaning that this is not a valid solution.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.string crypt

//     An array of three non-empty strings containing only uppercase English letters.

//     Guaranteed constraints:
//     crypt.length = 3,
//     1 ≤ crypt[i].length ≤ 14.

//     [input] array.array.char solution

//     An array consisting of pairs of characters that represent the correspondence between letters and numbers in the cryptarithm. The first character in the pair is an uppercase English letter, and the second one is a digit in the range from 0 to 9.

//     It is guaranteed that solution only contains entries for the letters present in crypt and that different letters have different values.

//     Guaranteed constraints:
//     solution[i].length = 2,
//     'A' ≤ solution[i][0] ≤ 'Z',
//     '0' ≤ solution[i][1] ≤ '9',
//     solution[i][0] ≠ solution[j][0], i ≠ j,
//     solution[i][1] ≠ solution[j][1], i ≠ j.

//     [output] boolean
//         Return true if the solution represents the correct solution to the cryptarithm crypt, otherwise return false.


function isCryptSolution(crypt, solution) {
    var solutionObj = { // make a solutionObj to translate solution array into hash, which will allow for easier compares
        
    }
    var zeroLetter; // to check if there is a letter that is zero
    for (i=0; i < solution.length; i++) {
        if (solution[i][1] === '0') { //if there is any '0' in solution key, then set the zeroLetter variable to the letter '0' is
            zeroLetter = solution[i][0]; 
        }
        solutionObj[solution[i][0]] = solution[i][1] // actually map solutionObj from array
    }
    var zeroBegin; //variable to flag if there is a beginning 0 crypt, which will fail the crypt solution
    
    
    
    var cryptNums = [] // make cryptNums array to store translated crypt
    for (i=0; i < crypt.length; i++) {
        var newCryptNum = "" //newCryptNum starts empty
        for (j=0; j < crypt[i].length; j++) { // loop through each crypt in crypt array and translate using solution hash.
            newCryptNum = newCryptNum + solutionObj[crypt[i][j]] // addition of strings allows for us to concatenate the string to the chars from hash.
        }
        cryptNums.push(newCryptNum) //add the concatenated string into array
        if (zeroletter && crypt[i].length > 1 && crypt[i][0] === zeroLetter) { //check if the first letter of any of the crypt letters are 0
            zeroBegin = true; //if so, throw this flag
        }
    }
    
    
    if (zeroBegin) { //automatically fails if 0 is at the beginning of any crypt
        return false
    } else if (parseInt(cryptNums[0]) + parseInt(cryptNums[1]) === parseInt(cryptNums[2]) ) { //parseInt the cryptNums and add together
        return true //only situation where it's true
    } else {
        return false //otherwise it's false
    }

    
}
