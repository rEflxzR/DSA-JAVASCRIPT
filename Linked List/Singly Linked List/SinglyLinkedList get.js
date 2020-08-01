class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = null
        this.head = null
        this.tail = null
    }

    push(val) {
        let newnode = new Node(val)
        if(this.head==null) {
            this.head = newnode
            this.tail = newnode
        }
        else {
            this.tail.next = newnode
            this.tail = newnode
        }

        this.length++
    }

    pop() {
        if(this.head==null) {
            return `Linked List is Empty`
        }
        else {
            let temp = this.head
            while(temp.next.next!= null) {
                temp = temp.next
            }
            let lastnode = temp.next
            this.tail = temp
            temp.next = null
            this.length--

            return lastnode
        }
    }

    shift() {
        if(this.head==null) {
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

    unshift(val) {
        let newnode = new Node(val)

        if(this.head==null) {
            this.head = newnode
            this.tail = newnode
        }
        else {
            newnode.next = this.head
            this.head = newnode
        }

        this.length++
    }

    get(n) {
        if(this.head==null) {
            return `Linked List is Empty`
        }
        else if(n < 0 || n > this.length) {
            return `Invalid Index Value`
        }
        else {
            let temp = this.head
            for(let i=1; i<n; i++) {
                temp = temp.next
            }
            return temp
        }
    }
}

let list = new SinglyLinkedList()
console.log(list.get(5))
console.log("\nInserting Nodes in the Linked List\n\n")
list.push("ReflxzR")
list.push("jAnzWE")
list.push("rEplan")
list.push("qLimAxz")
list.push("kEX")
list.push("PC")
console.log(list)
console.log("\n")

console.log("-----get Operation-----\n")
console.log(list.get(3))
console.log("\n")
console.log(list.get(8))
console.log("\n")
console.log(list.get(1))
console.log("\n")
console.log(list.get(6))