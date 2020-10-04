let {MaxHeap} = require('./BINARY HEAP.js')

function kLargestNumbers(array, k) {
    let heap = new MaxHeap()
    heap.list = array

    heap.buildHeap()

    for(let i=0; i<k; i++) {
        console.log(heap.extractMax())
    }
}

kLargestNumbers([5, 15, 10, 20, 8], 2)
kLargestNumbers([5, 8, 4, 10, 9], 3)