/* IMPLEMENTED USING 2 NESTED LOOPS
    THE 0th INDEX ELEMENT IS ASSUMED TO BE THE SORTED PORTION OF THE ARRAY
    WE START THE PASS FROM 1st INDEX, THEN WE START ANOTHER LOOP WHICH GOES IN BACKWORD DIRECTION AND STARTS FROM i-1
    FOR EACH AND EVERY ELEMENT, IF THE ELEMENT IS SMALLER THAN THE PREVIOUS ELEMENT -
        WE KEEP ON SWAPPING IT WITH BACKWARD ELEMENTS TILL IT IS IN THE RIGHT POSITION
*/

function insertionSort(arr) {
    for(let i=1; i<arr.length; i++) {

        for(let j=i-1; j>=0; j--) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}

console.log(insertionSort([4,2,7,6,9,1,3,8,5]))