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
}



let mylist = new SinglyLinkedList()
console.log(mylist)
console.log("\n")

mylist.push("ReflxzR")
console.log(mylist)
console.log("\n")

mylist.push("jAnzWE")
console.log(mylist)
console.log("\n")

mylist.push("rEplan")
console.log(mylist)
console.log("\n")

mylist.push("qLimAxz")
console.log(mylist)
console.log("\n")

mylist.push("MaCxzR")
console.log(mylist)
console.log("\n")
