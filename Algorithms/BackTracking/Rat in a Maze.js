function isSafe(i, j, N, matrix) {
    if(i<N && j<N && matrix[i][j]==1) {
        return true
    }
}

function ratMaze(maze, i, j, N, sol) {
    if(i==N-1 && j==N-1) {
        sol[i][j]=1
        return true
    }

    if(isSafe(maze, i, j, N)==true) {
        sol[i][j] = 1
        if(isSafe(maze, i+1,j, N)==true) {
            return true
        }
        else if(isSafe(maze, i, j+1, N)==true) {
            return true
        }
        sol[i][j]=0
    }
    return false
}

function Backtracking(matrix) {
    let N = matrix[0].length
    let solution = [[], [], []]
    if(ratMaze(matrix, 0, 0, N, solution)==true) {
        return solution
    }
    // return solution
}


console.log(Backtracking([[1,0,1], [1,1,0], [0,1,1]]))