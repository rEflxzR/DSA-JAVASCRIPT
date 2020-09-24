class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class Stack {
    constructor(size=Infinity) {
        this.maxsize = size
        this.first = null
        this.last = null
        this.length = 0
    }

    isEmpty() {
        return this.length==0
    }

    top() {
        return this.first.data
    }

    size() {
        return this.length
    }

    push(val) {
        if(this.size()==this.maxsize) {
            return "Stack Overflow"
        }
        let newnode = new Node(val)
        if(!this.first) {
            this.first = newnode
            this.last = newnode
        }
        else {
            newnode.next = this.first
            this.first = newnode
        }
        this.length++
        return newnode.data
    }

    pop() {
        if(this.isEmpty()) {
            return "Stack Underflow"
        }

        let temp = this.first
        if(this.first==this.last) {
            this.first = null
            this.last = null
        }
        else {
            this.first = temp.next
            temp.next = null
        }
        this.length--
        return temp.data
    }
}

module.exports.Node = Node
module.exports.Stack = Stack