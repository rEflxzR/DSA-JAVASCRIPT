function maximumCuts(l, a, b, c) {
    if(l==0) {
        return 0
    }
    if(l<0) {
        return -1
    }

    let res = Math.max(
        maximumCuts(l-a, a, b, c),
        maximumCuts(l-b, a, b, c),
        maximumCuts(l-c, a, b, c)
    )

    if(res==-1) {
        return res
    }
    else {
        return res+1
    }
}

// DP SOLUTION
// function maximumCuts(length, a, b, c) {
//     let table = new Array(length+1)

//     table[0] = 0
//     for(let i=1; i<=length; i++) {
//         table[i]=-1
//         if(i-a >= 0) {
//             table[i] = Math.max(table[i], table[i-a])
//         }
//         if(i-b >= 0) {
//             table[i] = Math.max(table[i], table[i-b])
//         }
//         if(i-c >= 0) {
//             table[i] = Math.max(table[i], table[i-c])
//         }
//         if(table[i]!=-1) {
//             table[i] = table[i]+1
//         }
//     }

//     return table[length]
// }


console.log(maximumCuts(7, 2, 4, 6))
console.log(maximumCuts(5, 2, 3, 1))
console.log(maximumCuts(23, 11, 13, 12))