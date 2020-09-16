function maximumIncreasingSubsequence(arr) {

    let n = arr.length
    let table = new Array(n).fill(-1)

    table[0] = arr[0]

    for(let i=1; i<n; i++) {
        let res = 0
        for(let j=i-1; j>=0; j--) {
            if(arr[j]<arr[i]) {
                res = Math.max(res, table[j])
            }
        }
        table[i] = res+arr[i]
    }

    return Math.max(...table)
}


console.log(maximumIncreasingSubsequence([3, 20, 4, 6, 7, 30]))
console.log(maximumIncreasingSubsequence([5, 10, 20]))
console.log(maximumIncreasingSubsequence([20, 10, 5]))