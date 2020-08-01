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

    push(data) {
        let newNode = new Node(data)
        if(this.head==null) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    print() {
        let i=1
        let temp = this.head
        while(i <= this.length) {
            console.log(temp.data)
            temp = temp.next
            i++
        }
    }

    reverse() {
        let temp = this.head
        this.tail = temp
        let nextnode = temp.next
        let secondnextnode = temp.next.next
        while(secondnextnode != null) {
            nextnode.next = temp
            temp = nextnode
            nextnode = secondnextnode
            secondnextnode = secondnextnode.next
        }
        nextnode.next = temp
        let newtail = this.head
        newtail.next = null
        this.head = nextnode
        this.tail = newtail
    }
}

let list = new SinglyLinkedList()
list.push("ReflxzR")
list.push("jAnzWE")
list.push("rEplan")
list.push("qLimAxz")
list.push("kEX")
list.push("PC")
list.print()
console.log("\n")
console.log(list)
console.log("\n")

console.log("-----Reverse Operation-----")
list.reverse()
console.log("\n")
list.print()
console.log("\n")
console.log(list)