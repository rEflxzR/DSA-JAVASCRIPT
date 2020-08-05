let {Queue} = require('./Queue.js')

let queue1 = new Queue()
let queue2 = new Queue()


/*
    APPROACH - We maintain the Last inserted item at the front of the Queue-1
               During push operation, we dequeue all items from queue-1 and store them in queue-2
               then enqueue the new item in queue-1 then enqueue all items from queue-2 to queue-1
*/

class MyNewStack {
    constructor(size=Infinity) {
        this.length = 0
        this.size = size
    }
    
    empty() {
        return this.length==0
    }

    stackSize() {
        return this.length
    }

    top() {
        return queue1.front()
    }

    push(val) {
        if(this.length >= this.size) {
            return "Stack Overflow"
        }

        while(!queue1.isEmpty()) {
            queue2.enqueue(queue1.dequeue().data)
        }

        queue1.enqueue(val)

        while(!queue2.isEmpty()) {
            queue1.enqueue(queue2.dequeue().data)
        }
        this.length++
    }

    pop() {
        if(this.length<=0) {
            return "Stack Underflow"
        }

        this.length--
        return queue1.dequeue()
    }
}

let stack = new MyNewStack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.push(70)  // Last item Inserted in the stack comes First Out

console.log(stack.empty())
console.log(stack.top())
console.log(stack.pop())
console.log(stack.top())
console.log(stack.stackSize())