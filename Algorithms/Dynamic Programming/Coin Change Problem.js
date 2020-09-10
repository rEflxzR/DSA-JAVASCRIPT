// function coinSelection(arr, sum, index=0) {
//     if(sum==0) {
//         return 1
//     }
//     if(index==arr.length) {
//         return 0
//     }

//     let res = coinSelection(arr, sum, index+1)

//     if(arr[index] <= sum) {
//         res = res + coinSelection(arr, sum-arr[index], index)
//     }

//     return res
// }


// DP OPTIMIZED TABULATION METHOD
function coinSelection(arr, sum) {

    let n = arr.length
    let table = [...Array(sum+1)].map((e) => new Array(n+1))   // table[sum+1][size+1]

    for(let i=0; i<=sum; i++) {
        table[i][0] = 0
    }
    for(let i=1; i<=n; i++) {
        table[0][i] = 1
    }

    for(let i=1; i<=sum; i++) {
        for(let j=1; j<=n; j++) {
            table[i][j] = table[i][j-1]   // DROP THE COIN, WHEN YOU DROP THE COIN, THE NUMBER OF COMBINATIONS WONT CHANGE, SAME AS PREVIOUS ONE
            if(arr[j-1]<=i) {
                table[i][j] += table[i-arr[j-1]][j]
            }
        }
    }

    return table[sum][n]
}


console.log(coinSelection([2,5,3,6], 10))
console.log(coinSelection([1,2,3], 4))