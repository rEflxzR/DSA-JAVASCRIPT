/*
    1. SORT THE JOB DETAILS ARRAY IN DECREASING ORDER OF PROFIT
    2. CREATE A NEW ARRAY WITH SIZE OF HIGHEST DEADLINE TIME
    3. EACH AND EVERY JOB IS SCHEDULED TO BE DONE ON ITS DEADLINE TIME
    4. IF THE DEADLINE SLOT IS ALREADY OCCUPIED, TRY FINDING THE CLOSEST EARLIER SLOT
*/

function jobScheduling(array) {

    let maxdeadline = 0
    array.forEach((item) => {
        item[0] > maxdeadline ? maxdeadline = item[0] : maxdeadline = maxdeadline
    })

    array.sort((a, b) => {
        return b[1]-a[1]
    })

    let arr = new Array(maxdeadline)

    arr[array[0][0]-1] = array[0][1]
    let sum = array[0][1]
    

    for(let i=1; i<arr.length; i++) {
        if( arr[array[i][0]-1] == undefined ) {
            arr[array[i][0]-1] = array[i][1]
            sum = sum + array[i][1]
        }
        else {
            let index = array[i][0]-2
            while(index!=-1) {
                if(arr[index]==undefined) {
                    break
                }
                index = index-1
            }

            if(index!=-1) {
                arr[index] = array[i][1]
                sum = sum + array[i][1]
            }
        }
    }

    return sum
}


// [Job_deadline_time, Job_completion_Profit]
console.log(jobScheduling([[2, 100], [1, 50], [2, 10], [1, 20], [3, 30]]))
console.log(jobScheduling([[2, 50], [2, 60], [3, 20], [3, 30]]))
console.log(jobScheduling([[4, 50], [1, 5], [1, 20], [5, 10], [5, 80]]))
console.log(jobScheduling([[4, 70], [1, 80], [1, 30], [1, 100]]))