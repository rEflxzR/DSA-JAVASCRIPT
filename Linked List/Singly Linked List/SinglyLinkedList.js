class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class SinglyLinkedList {
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

    pushFront(val) {
        let newnode = new Node(val)

        if(this.isEmpty()) {
            this.head = newnode
            this.tail = newnode
        }
        else {
            newnode.next = this.head
            this.head = newnode
        }
        this.length++
    }

    pushBack(val) {
        let newNode = new Node(val)
        if(this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    popBack() {
        if(this.isEmpty()) {
            return `Linked List is Empty`
        }
        
        else {
            let temp = this.head
            while(temp.next.next!= null) {
                temp = temp.next
            }
            this.tail = temp
            temp = temp.next
            this.tail.next = null
            this.length--

            return temp
        }
    }

    popFront() {
        if(this.isEmpty()) {
            return 'Linked List is Empty'
        }

        else {
            let temp = this.head
            this.head = temp.next
            temp.next = null
            this.length--

            return temp
        }
    }

    get(n) {
        if(n <= 0 || n > this.length) {
            return `Invalid Index Value`
        }

        let temp = this.head
        for(let i=1; i<n; i++) {
            temp = temp.next
        }

        return temp
    }

    set(n, val) {
        if(n <= 0 || n > this.length) {
            return `Invalid Index Value`
        }

        let temp = this.head
        for(let i=1; i<n; i++) {
            temp = temp.next
        }

        temp.data = val
    }

    insert(n, val) {
        if(n <= 0 || n > this.length) {
            return `Invalid Index Value`
        }

        let newnode = new Node(val)

        if(n==1) {
            newnode.next = this.head
            this.head = newnode
        }
        else {
            let temp = this.head
            for(let i=1; i<n-1; i++) {
                temp = temp.next
            }
            newnode.next = temp.next
            temp.next = newnode
        }
        this.length++
    }

    remove(n) {
        if(n <= 0 || n > this.length) {
            return `Invalid Index Value`
        }

        let temp = this.head

        if(n==1) {
            this.head = temp.next
            temp.next = null
        }
        else {
            for(let i=1; i<n-1; i++) {
                temp = temp.next
            }
            let currnode = temp
            temp = temp.next
            currnode.next = temp.next
            temp.next = null
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
module.exports.SinglyLinkedList = SinglyLinkedList

let list = new SinglyLinkedList()

list.pushBack(10)
list.pushBack(20)
list.pushBack(30)
list.pushBack(40)
console.log(list.remove(4))
list.print()