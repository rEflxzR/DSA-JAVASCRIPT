function longestBitonicSubsequence(arr) {

    let n = arr.length
    let itable = new Array(n).fill(-1)
    let dtable = new Array(n).fill(-1)

    itable[0] = dtable[n-1] = 1

    for(let i=1; i<n; i++) {
        let icount = 0
        for(let j=i-1; j>=0; j--) {
            if(arr[j]<arr[i]) {
                icount = Math.max(icount, itable[j])
            }
        }
        itable[i] = icount+1
    }
    for(let i=n-2; i>=0; i--) {
        let dcount = 0
        for(let j=i+1; j<n; j++) {
            if(arr[j]<arr[i]) {
                dcount = Math.max(dcount, dtable[j])
            }
        }
        dtable[i] = dcount+1
    }

    let res = 0
    for(let i=0; i<n; i++) {
        res = Math.max(res, itable[i]+dtable[i]-1)
    }

    return res
}

console.log(longestBitonicSubsequence([1, 11, 2, 10, 4, 5, 2, 1]))
console.log(longestBitonicSubsequence([12, 11, 40, 5, 2, 1]))
console.log(longestBitonicSubsequence([30, 20, 5]))