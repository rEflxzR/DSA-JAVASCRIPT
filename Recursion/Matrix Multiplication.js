function matrixMultiplication(arr1, arr2, index=0, m=arr1.length, n=arr2[0].length, arr3=[...Array(m)].map((e) => new Array(n).fill(35))) {

    if(index==arr1.length) {
        return
    }

    for(let j=0; j<arr2[0].length; j++) {
        let val = 0
        for(let i=0; i<arr1[0].length; i++) {
            val = val + arr1[index][i]*arr2[i][j]
        }
        arr3[index][j] = val
    }
    matrixMultiplication(arr1, arr2, index+1, m, n, arr3)

    return arr3
}


console.log(matrixMultiplication([[1,2,3,4], [5,6,7,2], [3,9,8,4]], [[5,6,5,3,5], [1,4,3,9,6], [2,2,3,8,7], [1,9,5,5,7]]))