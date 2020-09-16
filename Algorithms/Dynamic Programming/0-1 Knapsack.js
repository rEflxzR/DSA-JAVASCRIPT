function knapSack(value, weight, capacity, index=0) {
    if(capacity==0) {
        return 0
    }
    if(capacity<0) {
        return -value[index-1]
    }
    if(index==value.length) {
        return 0
    }

    return Math.max(knapSack(
        value, weight, capacity, index+1),
        value[index] + knapSack(value, weight, capacity-weight[index], index+1)
        )
}


// DP TABULATION BASED SOLUTION
// function knapSack(value, weight, capacity) {

//     let table = [...Array(value.length+1)].map((e) => new Array(capacity+1))
//     for(let i=0; i<=capacity; i++) {
//         table[0][i] = 0 
//     }
//     for(let i=0; i<=value.length; i++) {
//         table[i][0] = 0 
//     }

//     for(let i=1; i<=value.length; i++) {
//         for(let j=1; j<=capacity; j++) {
//             if(weight[i-1]<=j) {
//                 table[i][j] = Math.max(value[i-1]+table[i-1][j-weight[i-1]], table[i-1][j])
//             }
//             else {
//                 table[i][j] = table[i-1][j]
//             }
//         }
//     }
//     return table[value.length][capacity]
// }


console.log(knapSack([10, 40, 30, 50], [5, 4, 6, 3], 10))
console.log(knapSack([60, 100, 120], [10, 20, 30], 50))