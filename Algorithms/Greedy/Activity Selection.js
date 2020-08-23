/*
    1. ALWAYS SORT THE GIVEN SET IN INCREASING ORDER OF EARLIEST FINISHING TIME OF ACTIVITIES (MEANS ACTIVITY FINISHING FIRST COMES FIRST)
    2. ALWAYS INITIALIZE THE SOLUTION AS THE FIRST ACTIVITY (MEANS THE FIRST ACTIVITY IS ALWAYS PICKED)
    3. COMPARE THE NEXT ACTIVITY WITH PREVIOUSLY PICKED ACTIVITY IF IT OVERLAPS OR NOT
    4. IF IT OVERLAPS - DROP IT, OTHERWISE ADD IT TO RESULT
*/

function activitySelection(array) {
    // function selects maximum number of time based activities we can do provided we can perform only one at a time

    array.sort((a, b) => {
        return a[1]-b[1]
    })

    let result = [array[0]]
    let prev = 0

    for(let i=1; i<array.length; i++) {
        if(array[i][0] >= array[prev][1]) {
            result.push(array[i])
            prev = i
        }
    }

    return result.length
}

// [Start_time, End_time]
console.log(activitySelection([[3,8], [2,4], [1,3], [10,11]]))
console.log(activitySelection([[6,10], [1,4], [5,8], [2,3]]))
console.log(activitySelection([[12,25], [10,20], [20,30]]))