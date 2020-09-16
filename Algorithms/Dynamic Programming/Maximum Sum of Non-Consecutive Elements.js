function maxDistinctSum(arr) {
    let n = arr.length
    let table = new Array(n).fill(-1)
    table[0] = arr[0]

    for(let i=1; i<n; i++) {
        let sum = arr[i]
        for(let j=i-2; j>=0; j--) {
            if(arr[j]<arr[i]) {
                sum = Math.max(sum, arr[i]+table[j])
            }
        }
        table[i] = sum
    }
    return Math.max(...table)
}

console.log(maxDistinctSum([1, 10, 2]))
console.log(maxDistinctSum([8, 7, 6, 10]))
console.log(maxDistinctSum([10, 5, 15, 20, 2, 30]))