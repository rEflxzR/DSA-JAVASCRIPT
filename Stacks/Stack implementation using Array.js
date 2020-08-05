/*
The Array implementation of Stack is Easy but Efficient also as compared to Queues as we 
insert and remove elements from the end of the Array and both are Constant Time operation
*/

class Stack {
    constructor(size=Infinity) {
        this.stack = []
        this.length = 0
        this.size = size
    }

    isEmpty() {
        return this.stack.length==0
    }

    isFull() {
        return this.length==this.size
    }

    size() {
        return this.stack.length
    }

    top() {
        return this.stack[this.stack.length-1]
    }

    push(val) {
        if(this.isFull()) {
            return "Stack Overflow"
        }
        this.length++
        return this.stack.push(val)
    }

    pop() {
        if(this.isEmpty()) {
            return "Stack Underflow"
        }
        this.length--
        return this.stack.pop()
    }
}