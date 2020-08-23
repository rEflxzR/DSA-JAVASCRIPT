function substring(str) {
    let arr = str.split("")
    let start = 0
    let end = arr.length
    let temp

    function isSafe(array, start, current) {
        if(start!=0 && array[start-1]!="A" && array[current]!="B") {
            return false
        }
    }

    function helper(arr, start, end) {
        if(start==end) {
            console.log(arr.join(""))
        }
        else {
            for(let i=start; i<=end; i++) {
                if(isSafe(arr, start, i)) {
                    temp = arr[start]
                    arr[start] = arr[i]
                    arr[i] = temp

                    helper(arr, start+1, end)

                    temp = arr[start]
                    arr[start] = arr[i]
                    arr[i] = temp
                }
                else {
                    continue
                }
            }
        }
    }

    helper(arr, start, end-1)
}

substring("ABC")