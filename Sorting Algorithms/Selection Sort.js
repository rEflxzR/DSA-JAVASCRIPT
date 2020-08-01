/* IMPLEMENTED USING 2 NESTED LOOPS
    FOR EACH PASS, FIRST ELEMENT OF THE PASS IS SET AS THE MIN ELEMENT 
    ARRAY PASS IS STARTED FROM THE NEXT INDEX, IF WE ENCOUNTER ANY ELEMENT SMALLER THAN MIN, WE ASSIGN THAT TO MIN
    AFTER THE PASS, IF MIN WAS CHANGED, WE SWAP INITIAL MIN AND NEW MIN VALUES
    TOTAL 'N' PASSES ARE MADE FOR WHOLE ARRAY (N=LENGTH OF ARRAY)
*/

function selectionSort(arr) {
    for(let i=0; i<arr.length; i++) {
        let index = 0
        let min = arr[i]
        let swap = false
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j]
                index = j
                swap = true
            }
        }
        if(swap) {
            let temp = arr[i]
            arr[i] = min
            arr[index] = temp
        }
    }
    return arr
}

console.log(selectionSort([9,5,7,8,3,4,1,6,2]))