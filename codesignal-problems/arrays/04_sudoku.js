// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

// Example

//     For

//     grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
//             ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
//             ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//             ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
//             ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
//             ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
//             ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
//             ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
//             ['.', '.', '.', '5', '.', '.', '.', '7', '.']]

//     the output should be
//     sudoku2(grid) = true;

//     For

//     grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
//             ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
//             ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
//             ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
//             ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
//             ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
//             ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
//             ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
//             ['.', '2', '.', '.', '3', '.', '.', '.', '.']]

//     the output should be
//     sudoku2(grid) = false.

//     The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] array.array.char grid

//     A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

//     [output] boolean
//         Return true if grid represents a valid Sudoku puzzle, otherwise return false.


function sudoku2(grid) {
    var columnGrid = convertColumns(grid) // converts grid from arrays of rows to arrays of columns
    var threeByThreeGrid = convertThreeByThree(grid) // converts grid from arrays of rows to arrays of three by threes
    if (checkBadGrid(grid) || checkBadGrid(columnGrid) || checkBadGrid(threeByThreeGrid)) { // uses 'checkBadGrid' function to check whether the grid is illegal (i.e. each row of the array matrix is legal)
        return false
    } else {
        return true;
    };
    
}

function checkBadGrid(grid) {
    for (i = 0; i < grid.length; i++) { //loops through grid rows
        var allValues = { // creates a hash of values of used values
        
        }
        for(j = 0; j < grid[i].length; j++) { // loops through a specific row
            if(grid[i][j] != '.' && allValues[grid[i][j]]) { // '.'s are empty.
                return true
            } else {
                allValues[grid[i][j]] = true
            }
        }
    } 
    return false;
    
}

function convertColumns(grid) { // converts grid from rows to columns in arrays
    var columnGrid = []
    for (j=0; j < grid[0].length; j++) {
        var column = []
        for (i=0; i < grid.length; i++) {
            column.push(grid[i][j])
        }
        columnGrid.push(column)
    }
    return columnGrid
}

function convertThreeByThree(grid) {
    var threeByThreeGrid = []
    var threeByThreeObj = {
        
    }
    
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            var threeByThreeRow = Math.floor(i / 3) //row and column for the 3x3 is set by this formula
            var threeByThreeColumn = Math.floor(j / 3)
            if (threeByThreeObj[threeByThreeRow * 3 + threeByThreeColumn]) { // *3 works because there are three in every row and column
                threeByThreeObj[threeByThreeRow * 3 + threeByThreeColumn].push(grid[i][j]) // we are putting it in an object first..
            } else {
                threeByThreeObj[threeByThreeRow * 3 + threeByThreeColumn] = [grid[i][j]]
            }
        }
    }
    for (const threeByThreeIndex in threeByThreeObj) { // before looping through the object and pushing it into an array
        threeByThreeGrid.push(threeByThreeObj[threeByThreeIndex])
    }
    return threeByThreeGrid
}