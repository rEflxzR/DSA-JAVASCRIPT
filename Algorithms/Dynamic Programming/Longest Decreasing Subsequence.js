function longestDecreasingSubsequence(arr) {

    let n = arr.length
    let table = new Array(n).fill(-1)

    table[0] = 1

    for(let i=1; i<n; i++) {
        let count = 0
        for(let j=i-1; j>=0; j--) {
            if(arr[j]>arr[i]) {
                count = Math.max(count, table[j])
            }
        }
        table[i] = count+1
    }
    return Math.max(...table) 
}

console.log(longestDecreasingSubsequence([1, 11, 2, 10, 4, 5, 2, 1]))
console.log(longestDecreasingSubsequence([10, 20, 30, 40]))
console.log(longestDecreasingSubsequence([100, 75, 25, 15, 4, 2, 1]))