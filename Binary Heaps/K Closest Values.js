let {PriorityQueue} = require('./Priority Queue.js')

function kClosestValue(array, val, k) {

    let pr = new PriorityQueue()
    for(let num of array) {
        pr.insert(num, Math.abs(val-num))
    }

    for(let i=0; i<k; i++) {
        console.log(pr.extractMin().value)
    }
    console.log("\n")
}

kClosestValue([10, 15, 7, 3, 4], 8, 2)
kClosestValue([100, 80, 10, 5, 70], 2, 3)
kClosestValue([20, 40, 5, 100, 150], 100, 3)