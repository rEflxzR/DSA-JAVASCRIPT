// COUNT THE TOTAL NUMBER OF OPERATIONS NEEDED TO CONVERT STRING S1 TO STRING S2

function leastStringConversionOperations(s1, s2, m=s1.length, n=s2.length) {

    if(m==0) {
        return n
    }
    if(n==0) {
        return m
    }

    if(s1[m-1]==s2[n-1]) {
        return leastStringConversionOperations(s1, s2, m-1, n-1)
    }
    else {
        return 1 + Math.min(
            leastStringConversionOperations(s1, s2, m, n-1), 
            leastStringConversionOperations(s1, s2, m-1, n),
            leastStringConversionOperations(s1, s2, m-1, n-1)
            )
    }
}


// function leastStringConversionOperations(s1, s2, m=s1.length, n=s2.length) {

//     let table = [...Array(m+1)].map((e) => new Array(n+1))   // table[m][n]

//     for(let i=0; i<=m; i++) {
//         table[i][0] = i
//     }
//     for(let i=0; i<=n; i++) {
//         table[0][i] = i
//     }

//     for(let i=1; i<=m; i++) {
//         for(let j=1; j<=n; j++) {
//             if(s1[i-1]==s2[j-1]) {
//                 table[i][j] = table[i-1][j-1]
//             }
//             else {
//                 table[i][j] = 1 + Math.min(table[i][j-1], table[i-1][j], table[i-1][j-1])
//             }

//         }
//     }

//     return table[m][n]
// }

console.log(leastStringConversionOperations("SATURDAY", "SUNDAY"))
console.log(leastStringConversionOperations("CAT", "CUT"))