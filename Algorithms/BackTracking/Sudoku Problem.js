function isSafe(mat, mat_size, row, col, n) {
    for(let k=0; k<mat_size; k++) {
        if(mat[k][col]==n || mat[row][k]==n) {
            return false
        }
    }

    let s = Math.sqrt(mat_size)
    let si = row - row%s
    let sj = col - col%s
    for(let k=0; k<s; k++) {
        for(let l=0; l<s; l++) {
            if(mat[k+si][l+sj]==n) {
                return false
            }
        }
    }

    return true
}

function backTracking(matrix, size, solutionSudoku) {

    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            if(matrix[i][j]==0) {

                for(let num=1; num<=size; num++) {
                    if(isSafe(matrix, size, i, j, num)==true) {
                        solutionSudoku[i][j] = num
                        if(backTracking(matrix, size, solutionSudoku)) {
                            return true
                        }
                        solutionSudoku[i][j] = 0
                    }
                }
                return false
            }
        }
    }
    return true
}

function solveSudoku(maze) {
    let matrix = maze
    let sudoku = maze
    let size = maze.length
    if(backTracking(matrix, size, sudoku)) {
        console.log(sudoku)
    }
    else {
        console.log("Solution Not Possible")
    }
}


solveSudoku([[1,0,3,0], [0,0,2,1], [0,1,0,2], [2,4,0,0]])
solveSudoku([[1,4,3,0], [0,0,3,1], [0,1,0,2], [2,4,0,0]])