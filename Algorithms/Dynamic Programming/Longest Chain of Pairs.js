function longestPairChain(arr) {

    let n = arr.length
    arr.sort((a, b) => {
        if(a[0]==b[0]) {
            return a[1]-b[1]
        }
        return a[0]-b[0]
    })

    let table = new Array(n).fill(1)

    for(let i=1; i<n; i++) {
        lis = 0
        for(let j=i-1; j>=0; j--) {
            if(arr[j][1]<arr[i][0]) {
                lis = Math.max(lis, table[j])
            }
        }
        table[i] = lis+1
    }

    return Math.max(...table)
}


console.log(longestPairChain([[5,24], [30,60], [15,28], [27,40], [50,90]]))
console.log(longestPairChain([[6,8], [3,4]]))