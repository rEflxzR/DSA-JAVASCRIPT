function bridgeConnections(arr) {

    let n = arr.length
    arr.sort((a, b) => {
        if(a[0]==b[0]) {
            return a[1]-b[1]
        }
        return a[0]-b[0]
    })

    let table = new Array(n).fill(1)

    for(let i=1; i<n; i++) {
        let lis = 0
        for(let j=i-1; j>=0; j--) {
            if(arr[j][1]<arr[i][1]) {
                lis = Math.max(lis, table[j])
            }
        }
        table[i] = lis+1
    }

    return Math.max(...table)
}


console.log(bridgeConnections([[6,2], [4,3], [2,6], [1,5]]))
console.log(bridgeConnections([[6,2], [4,3], [2,6], [1,5], [1,3]]))
console.log(bridgeConnections([[8,1], [1,2], [4,3], [3,4], [2,6], [6,7], [7,8], [5,5]]))