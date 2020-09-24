let {Queue} = require('./Queue.js')

let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
queue.enqueue(70)
queue.enqueue(80)
queue.enqueue(90)


/*
    APPROACH - We dequeue Nodes from Queue and Push them to a Stack till the queue is empty
               Then pop items from stack till it is empty and Enqueue them back to the Queue
               The stack here is modelled using an Array/List
*/

function reverseQueue(queue) {

    let stack = []
    while(!queue.isEmpty()) {
        stack.push(queue.dequeue())
    }
    while(stack.length) {
        queue.enqueue(stack.pop())
    }

    return queue.front()
}

console.log(reverseQueue(queue))