let {MinHeap} = require('./BINARY HEAP.js')

function kSortedArray(array, k) {
    let heap = new MinHeap()
    let res = []

    for(let i=0; i<=k; i++) {
        heap.insert(array[i])
    }

    for(let i=k+1; i<array.length; i++) {
        res.push(heap.extractMin())
        heap.insert(array[i])
    }

    while(heap.list.length) {
        res.push(heap.extractMin())
    }

    return res
}

console.log(kSortedArray([9, 8, 7, 18, 19, 17], 2))
console.log(kSortedArray([10, 9, 7, 8, 4, 70, 50, 60], 4))