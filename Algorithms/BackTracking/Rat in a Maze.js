function isSafe(matrix_size, mat, i, j) {
    if(i<matrix_size && j<matrix_size && mat[i][j]==1) {
        return true
    }
}

function backTracking(matrix, N, i, j, solmaze) {
    if(i==N-1 && j==N-1) {
        solmaze[i][j]=1
        return true
    }

    if(isSafe(N, matrix, i, j)==true) {
        solmaze[i][j]=1
        if(backTracking(matrix, N, i+1, j, solmaze)) {
            return true
        }
        else if(backTracking(matrix, N, i, j+1, solmaze)) {
            return true
        }
        solmaze[i][j]=0
    }
    return false
}

function solveMaze(maze) {
    let given_matrix = maze
    let size = given_matrix.length
    let solutionMaze = [...Array(size)].map(e => Array(size).fill(0));


    backTracking(given_matrix, size, 0, 0, solutionMaze)
    console.log(solutionMaze)
}



solveMaze([[1,0,1], [1,1,0], [0,1,1]])