// function minimumCoins(arr, sum, index=arr.length) {
//     if(sum==0) {
//         return 0
//     }
//     if(sum<0 || index==0) {
//         return Infinity
//     }

//     return Math.min(1+minimumCoins(arr, sum-arr[index-1], index), minimumCoins(arr, sum, index-1))
// }


function minimumCoins(arr, sum, n=arr.length) {
    
    let table = new Array(sum+1).fill(Infinity)
    table[0] = 0

    for(let i=1; i<=sum; i++) {
        let coins = Infinity
        for(let j=0; j<n; j++) {
            if(arr[j]<=sum) {
                1+table[i-arr[j]] < coins ? coins = 1+table[i-arr[j]] : coins = coins
            }
        }
        table[i] = coins
    }

    console.log(table)
    return table[sum]
}


console.log(minimumCoins([25, 10, 5], 30))
console.log(minimumCoins([9, 5, 6, 1], 11))
console.log(minimumCoins([3, 4, 1], 5))