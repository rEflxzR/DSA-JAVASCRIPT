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

    set(n, val) {
        let i=1
        let temp = this.head
        while(i<n) {
            temp = temp.next
            i++
        }
        temp.data = val
        return temp
    }

    insert(n, val) {
        let newnode = new Node(val)

        if(n==1) {
            newnode.next = this.head
            this.head = newnode
            this.length++
        }
        else if(n > this.length || n < 0) {
            console.log("Invalid Index Provided")
        }
        else {
            let i=1
            let temp = this.head
            while(i<n-1) {
                temp = temp.next
                i++
            }
            newnode.next = temp.next
            temp.next = newnode
            this.length++
        }
    }

    remove(n) {
        if(n<=this.length && n>0) {

            let temp = this.head

            if(n==1) {
                this.head = temp.next
                temp.next = null
            }
            else if(n==this.length) {
                while(temp.next.next != null) {
                    temp = temp.next
                }
                let newlastnode = temp
                temp = temp.next
                newlastnode.next = null
                this.tail = newlastnode
            }
            else {
                let i=1
                while(i<n-1) {
                    temp = temp.next
                    i++
                }
                let currnode = temp
                currnode.next = temp.next.next
                temp.next = null
            }
            this.length--
            return temp
        }
        else {
            return `Invalid Index value`
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

    print() {
        if(!this.head) {
            console.log("The List is Empty")
        }
        else {
            let i=1
            let temp = this.head
            while(i <= this.length) {
                console.log(temp.data)
                temp = temp.next
                i++
            }
        }
    }
}

let list = new SinglyLinkedList()
list.print()
console.log("\n--------Push Operation--------\n")
list.push("ReflxzR")
list.push("jAnzWE")
list.push("rEplan")
list.push("qLimAxz")
list.push("kEX")
list.push("PC")
console.log(list)
console.log("\n")
list.print()
console.log("\n")

console.log("-----Reverse Operation-----")
list.reverse()
console.log("\n")
list.print()
console.log("\n")
console.log(list)