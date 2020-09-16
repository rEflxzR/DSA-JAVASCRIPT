// MEMOIZATION METHOD (TOP-DOWN)
function longestCommonSubsequence(s1, s2, m=s1.length, n=s2.length) {

    let memo = [...Array(m+1)].map((e) => Array(n+1).fill(-1))

    function helper(s1, s2, m, n) {
        if(memo[m][n]!=-1) {
            return memo[m][n]
        }
        if(m==0 || n==0) {
            memo[m][n] = 0
        }
        else {
            if(s1[m-1]==s2[n-1]) {
                memo[m][n] = 1+helper(s1, s2, m-1, n-1)
            }
            else {
                memo[m][n] = Math.max(helper(s1, s2, m-1, n), helper(s1, s2, m, n-1))
            }
        }
        return memo[m][n]
    }

    return helper(s1, s2, m, n)
}


// TABULATION METHOD (BOTTOM-UP)
// function longestCommonSubsequence(s1, s2) {
//     let m = s1.length
//     let n = s2.length

//     let table = [...Array(m+1)].map((e) => new Array(n+1))

//     for(let i=0; i<=m; i++) {
//         table[i][0] = 0
//     }

//     for(let i=0; i<=n; i++) {
//         table[0][i] = 0
//     }

//     for(let i=1; i<=m; i++) {
//         for(let j=1; j<=n; j++) {
//             if(s1[i-1]==s2[j-1]) {
//                 table[i][j] = 1 + table[i-1][j-1]
//             }
//             else {
//                 table[i][j] = Math.max(table[i-1][j], table[i][j-1])
//             }
//         }
//     }

//     return table[m][n]
// }


console.log(longestCommonSubsequence("ReflxzR", "PhanxzR"))
console.log(longestCommonSubsequence("XYZPRS", "GHJK"))
console.log(longestCommonSubsequence("JWLWGGGPSK", "IUGGWPK"))
console.log(longestCommonSubsequence("YNWALFC", "kensuwbjusYNWALFC"))

// Take a String, Reverse it and Find their LCS = Longest Palindromic Subsequence
console.log(longestCommonSubsequence("GEEKSFORGEEKS", "SKEEGROFSKEEG"))