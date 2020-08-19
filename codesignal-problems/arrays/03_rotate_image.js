
// rotateImage

// easy

// codewriting

// 1000

// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]

// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.array.integer a

//     Guaranteed constraints:
//     1 ≤ a.length ≤ 100,
//     a[i].length = a.length,
//     1 ≤ a[i][j] ≤ 104.

//     [output] array.array.integer

function rotateImage(a) {
    // transpose function, 1,2 => 2,1, 3,1 => 1,3
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < i; j++) { // has to be less than j, else will reswap. doing it down one half of the matrix diagonally
            let temp = a[j][i]
            a[j][i] = a[i][j]
            a[i][j] = temp
        }
    }
    //  reverse function, 0, 0 => 0, 3 (if 3 is last), 0,1 => 0,2, etc.
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < (a[i].length / 2); j++) { // has to be / 2 to prevent unreversing the reverse
            let temp = a[i][j]
            a[i][j] = a[i][a[i].length - 1 - j] // remember to do - 1 first due to length number not matching index numbers
            a[i][a[i].length - 1 - j] = temp
        }
    }
    
    return a
}
