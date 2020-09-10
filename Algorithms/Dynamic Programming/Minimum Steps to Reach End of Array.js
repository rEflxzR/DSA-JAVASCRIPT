function minimumSteps(arr, n=arr.length) {
    if(n==1) {
        return 0
    }

    let steps = Infinity

    for(let i=0; i<n-1; i++) {
        if(arr[i]+i >= n-1) {
            let subres = minimumSteps(arr, i+1)
            steps = Math.min(steps, subres+1)
        }
    }

    return steps
}



// DP BOTTOM UP SOLUTION
// function minimumSteps(arr, n=arr.length) {

//     let table = new Array(n).fill(Infinity)
//     table[n-1] = 0

//     for(let i=n-2; i>=0; i--) {
//         let steps = Infinity
//         for(let j=i+1; j<n && j<=i+arr[i]; j++) {
//             steps = Math.min(steps, table[j])
//         }
//         table[i] = steps+1
//     }

//     return table[0]
// }


console.log(minimumSteps([3, 4, 2, 1, 2, 1]))
console.log(minimumSteps([4, 1, 5, 3, 1, 3, 2, 1, 8]))
console.log(minimumSteps([0, 0, 0, 0, 0, 4]))