let {MinHeap} = require('./BINARY HEAP.js')

function maximumItems(array, sum) {
    let heap = new MinHeap()

    for(let i=0; i<array.length; i++) {
        heap.insert(array[i])
    }
    let count = 0
    while(heap.list.length) {
        let cost = heap.extractMin()
        if(cost<=sum) {
            count++
            sum = sum-cost
        }
        else {
            return count
        }
    }
}

console.log(maximumItems([20, 10, 5, 30, 100], 35))
console.log(maximumItems([1, 12, 5, 75, 100], 10))