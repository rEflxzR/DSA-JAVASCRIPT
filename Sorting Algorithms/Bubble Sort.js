/* IMPLEMENTED USING 2 NESTED LOOPS
    EACH TIME WE COMPARE AN ELEMENT WITH NEXT ONE AND SWAP IF NECESSARY
    TOTAL 'N' PASSES ARE MADE FOR WHOLE ARRAY (N=LENGTH OF ARRAY)
*/

function bubbleSort(arr) {
    for(let i=0; i<arr.length; i++) {
        let noswap = true
        for(let j=0; j<arr.length-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noswap=false
            }
        }
        if(noswap) {
            break
        }
    }

    return arr
}

console.log(bubbleSort([4,7,8,1,3,2,9,6,5]))
console.log(bubbleSort([1,3,5,4,2,6,7,8,9]))