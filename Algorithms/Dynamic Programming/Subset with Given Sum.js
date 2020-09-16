function subsetSum(arr, sum, index=0) {
    if(index==arr.length) {
        if(sum==0) {
            return 1
        }
        return 0
    }

    let count = subsetSum(arr, sum, index+1)
    sum = sum - arr[index]
    count = count + subsetSum(arr, sum, index+1)

    return count
}

// DP OPTIMIZED SOLUTION
// function subsetSum(arr, sum, n=arr.length) {

//     let table = [...Array(sum+1)].map((e) => new Array(n+1))

//     for(let i=0; i<=sum; i++) {
//         table[i][0] = 0
//     }
//     for(let i=0; i<=n; i++) {
//         table[0][i] = 1
//     }

//     for(let i=1; i<=sum; i++) {
//         for(let j=1; j<=n; j++) {
//             if(arr[j-1]<=i) {
//                 table[i][j] = table[i][j-1] + table[i-arr[j-1]][j-1]
//             }
//             else {
//                 table[i][j] = table[i][j-1]
//             }
//         }
//     }
//     return table[sum][n]
// }

console.log(subsetSum([10,5,2,3,6], 8))
console.log(subsetSum([1,2,3], 4))
console.log(subsetSum([10,20,15], 37))
console.log(subsetSum([10,20,15], 0))
console.log(subsetSum([], 0))