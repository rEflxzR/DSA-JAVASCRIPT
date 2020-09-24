function isSafe(mat, mat_size, row, column) {
    for(let i=0; i<column; i++) {
        if(mat[row][i]) {
            return false
        }
    }

    for(let i=row, j=column; i>=0&&j>=0; i--, j--) {
        if(mat[i][j]) {
            return false
        }
    }

    for(let i=row, j=column; i<mat_size&&j>=0; i++, j--) {
        if(mat[i][j]) {
            return false
        }
    }

    return true
}

function backTracking(matrix, size, col) {
    if(col==size) {
        return true
    }

    for(let i=0; i<size; i++) {
        if(isSafe(matrix, size, i, col)) {
            matrix[i][col] = 1
            if(backTracking(matrix, size, col+1)) {
                return true
            }
            matrix[i][col] = 0
        }
    }
    return false
}

function Nqueen(maze_size) {
    let size = maze_size
    let matrix = [...Array(size)].map((a) => new Array(size).fill(0))

    if(backTracking(matrix, size, 0)) {
        console.log(matrix)
        return
    }
    console.log("No Configuration is Possible")
}


Nqueen(5)
Nqueen(4)
Nqueen(3)