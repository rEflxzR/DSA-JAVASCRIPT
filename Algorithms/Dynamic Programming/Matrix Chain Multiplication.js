function matrixSolver(newarr, sum=0) {
    if(newarr.length==2) {
        return 0
    }

    for(let i=2; i<newarr.length; i++) {
        sum = sum + newarr[0]*newarr[i-1]*newarr[i]
    }

    return sum
}

function chainMatrixMultiplication(arr, si=0, se=1) {

    if(se==arr.length-2) {
        return matrixSolver(arr.slice(0, se+1))+matrixSolver(arr.slice(se))+arr[si]*arr[se]*arr[arr.length-1]
    }

    return Math.min(
        matrixSolver(arr.slice(se))+matrixSolver(arr.slice(0, se+1))+arr[si]*arr[se]*arr[arr.length-1],
        chainMatrixMultiplication(arr, si, se+1)
        )
}


console.log(chainMatrixMultiplication([2, 1, 3, 4]))
console.log(chainMatrixMultiplication([2, 1, 3]))
console.log(chainMatrixMultiplication([40, 20, 30, 10, 30])) 
console.log(chainMatrixMultiplication([20, 10, 30, 40]))   
console.log(chainMatrixMultiplication([10, 20, 30, 40, 30]))
console.log(chainMatrixMultiplication([10, 20, 30]))
console.log(chainMatrixMultiplication([1, 2, 3, 4, 3]))