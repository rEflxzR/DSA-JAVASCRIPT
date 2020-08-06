class Node {
    constructor(val) {
        this.data = val
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    isEmpty() {
        return this.head==null && this.tail==null
    }

    front() {
        return this.head
    }

    back() {
        return this.tail
    }

    pushBack(val) {
        let newnode = new Node(val)

        if(this.isEmpty()) {
            this.head = newnode
            this.tail = newnode
        }
        else {
            this.tail.next = newnode
            newnode.previous = this.tail
            this.tail = newnode
        }

        this.length++
    }

    pushFront(val) {
        let newnode = new Node(val)

        if(this.isEmpty()) {
            this.head = newnode
            this.tail = newnode
        }
        else {
            this.head.previous = newnode
            newnode.next = this.head
            this.head = newnode
        }

        this.length++
    }

    popBack() {
        if(this.isEmpty()) {
            return "Linked List is Empty"
        }

        let lastnode = this.tail
        this.tail = this.tail.previous
        this.tail.next = null
        lastnode.previous = null
        this.length--

        return lastnode
    }

    popFront() {
        if(this.isEmpty()) {
            return "Linked List is Empty"
        }
        
        let headnode = this.head
        this.head = this.head.next
        headnode.next = null
        this.head.previous = null
        this.length--

        return headnode
    }

    get(n) {
        if(n<=0 || n>this.length) {
            return `Invalid Index Provided`
        }

        let temp = this.head
        for(let i=1; i<n; i++) {
            temp = temp.next
        }
        return temp
    }

    set(n, val) {
        if(n<=0 || n>this.length) {
            return `Invalid Index Provided`
        }

        let temp = this.head
        for(let i=1; i<n; i++) {
            temp = temp.next
        }

        temp.data = val
    }

    insert(n, val) {

        if(n<=0 || n>this.length) {
            return `Invalid Index Position`
        }

        let newnode = new Node(val)
        if(n==1) {
            newnode.next = this.head
            this.head.previous = newnode
            this.head = newnode
        }
        else {
            let temp = this.head
            for(let i=1; i<n-1; i++) {
                temp = temp.next
            }
            newnode.next = temp.next
            temp.next.previous = newnode
            temp.next = newnode
            newnode.previous = temp
        }

        this.length++
    }

    remove(n) {

        if(n<=0 || n>this.length) {
            return "Invalid Index Position"
        }

        let temp = this.head
        if(n==1) {
            this.head = temp.next
            this.head.previous = null
            temp.next = null
        }
        else if(n==this.length) {
            temp = this.tail
            this.tail = temp.previous
            this.tail.next = null
            temp.previous = null
        }
        else {
            for(let i=1; i<n; i++) {
                temp = temp.next
            }
            temp.previous.next = temp.next
            temp.next.previous = temp.previous
            temp.next = null
            temp.previous = null
        }
        this.length--

        return temp
    }

    print() {
        if(this.isEmpty()) {
            console.log(`Linked List is Empty`)
        }
        else {
            let temp = this.head
            while(temp!=null) {
                console.log(temp.data)
                temp = temp.next
            }
        }
    }
}

module.exports.Node = Node
module.exports.DoublyLinkedList = DoublyLinkedList
