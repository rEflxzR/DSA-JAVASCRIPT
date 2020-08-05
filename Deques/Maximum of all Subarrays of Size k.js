let {Deque} = require('./Deque.js')

/*
    APPROACH - We use sliding windows technique to solve the problem
               We maintain the Maximum value at the front of a deque
               For each element, We keep removing the elements from Rear that are smaller than the next element that
               is to be inserted in the deque, After that we add it to the Rear
               If the element is smaller than the rear element, we just add it to Rear
*/

function maximumOfSubArrays(array, k, n) {

    let deque = new Deque()

    for(let i=0; i<k; i++) {
        while(!deque.isEmpty() && array[deque.getRear()] <= array[i]) {
            deque.removeBack()
        }
        deque.addRear(i)
    }

    for(let i=k; i<n; i++) {

        console.log(array[deque.getFront()])

        if(deque.getFront()==i-k) {
            deque.removeFront()
        }
        while(!deque.isEmpty() && array[deque.getRear()] <= array[i]) {
            deque.removeBack()
        }
        deque.addRear(i)
    }

    console.log(array[deque.getFront()])
}

maximumOfSubArrays([20, 40, 30, 10, 60], 2, 5)
console.log("\n\n")
maximumOfSubArrays([10, 8, 5, 12, 15, 7, 6], 3, 7)
console.log("\n\n")
maximumOfSubArrays([20, 5, 3, 8, 6, 15], 4, 6)