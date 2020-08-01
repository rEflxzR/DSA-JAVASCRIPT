// ---------------- (HELPER METHOD) -----------------
function binarySearch(arr, item) {
    let low = 0
    let high = arr.length-1

    function helper(searcharr, sitem, low, high) {
        let mid = Math.floor((low+high)/2)

        if(high < low) {
            return `${sitem} Not Found in the Array`
        }
        if(searcharr[mid] == sitem) {
            return `${sitem} Found in the Array`
        }

        if(searcharr[mid] < sitem) {
            return helper(searcharr, sitem, mid+1, high)
        }
        else {
            return helper(searcharr, sitem, low, mid-1)
        }
    }

    return helper(arr, item, low, high)
}

console.log(binarySearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 4))
console.log(binarySearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 33))
console.log(binarySearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 6))
console.log(binarySearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 7))
console.log(binarySearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 35))
console.log(binarySearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 9))
console.log(binarySearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 27))
console.log(binarySearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 5))
console.log(`\n\n\n`)

// ------------- (PURE RECURSION) ---------------

function binSearch(arr, item, low=0, high=arr.length-1) {
    let mid = Math.floor((low+high)/2)

    if(arr[mid] == item) {
        return `${item} Found in the Array`
    }
    if(high < low) {
        return `${item} NOT Found in the Array`
    }

    if(arr[mid] < item) {
        return binSearch(arr, item, mid+1, high)
    }
    else {
        return binSearch(arr, item, low, mid-1)
    }
}

console.log(binSearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 4))
console.log(binSearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 33))
console.log(binSearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 6))
console.log(binSearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 7))
console.log(binSearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 35))
console.log(binSearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 9))
console.log(binSearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 27))
console.log(binSearch([1,2,3,4,5,6,8,9,10,15,23,35,37,44,50], 5))