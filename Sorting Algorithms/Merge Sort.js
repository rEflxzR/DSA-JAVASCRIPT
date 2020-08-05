function mergeArrays(arr1, arr2) {

    let i = 0
    let j = 0
    let newarr = []
    
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            newarr.push(arr1[i])
            i++
        }
        else if(arr1[i] > arr2[j]) {
            newarr.push(arr2[j])
            j++
        }
    }

    if(i == arr1.length) {
        for(let k=j; k<arr2.length; k++) {
            newarr.push(arr2[k])
        }
    }
    else {
        for(let k=i; k<arr1.length; k++) {
            newarr.push(arr1[k])
        }
    }

    return newarr

}


function mergeSort(arr) {
    if(arr.length == 1) {
        return arr
    }

    return mergeArrays(mergeSort(arr.slice(0, Math.floor(arr.length/2))), mergeSort(arr.slice(Math.floor(arr.length/2))))
}

console.log(mergeSort([3,6,4,8,2,1,9,5,7,13,65,45,34,94,27,35,75,69,345,634,526]))
