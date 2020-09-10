function longestIncreasingSubsequence(arr, n=arr.length) {
    let table = new Array(n+1).fill(1)

    for(let num of arr) {
        let maxlis = 0
        let i = 0
        while(arr[i]!=num) {
            if(arr[i]<num && table[i]>maxlis) {
                maxlis = table[i]
            }
            i++
        }
        table[i] = maxlis + 1
    }

    return Math.max(...table)
}


console.log(longestIncreasingSubsequence([3, 4, 2, 8, 10, 5, 1]))
console.log(longestIncreasingSubsequence([8, 100, 150, 10, 12, 15, 110]))
console.log(longestIncreasingSubsequence([15, 19, 35, 53, 67]))
console.log(longestIncreasingSubsequence([50, 40, 20, 10]))