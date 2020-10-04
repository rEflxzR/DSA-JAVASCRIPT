let {MinHeap} = require('../Binary Heaps/BINARY HEAP.js')

function heapSort(heap, array) {

    heap.list = array

    let p = Math.floor((heap.list.length-2)/2)
    for(let i=p; i>=0; i--) {
        heap.heapify(i)
    }

    let res = []
    let l = heap.list.length

    while(l) {
        [heap.list[0], heap.list[l-1]] = [heap.list[l-1], heap.list[0]]
        res.push(heap.list.pop())
        heap.heapify(0)
        l--
    }

    return res
}

let heap = new MinHeap()
let arr = [4, 10, 3, 5, 1]

console.log(arr)
arr = heapSort(heap, arr)
console.log(arr)