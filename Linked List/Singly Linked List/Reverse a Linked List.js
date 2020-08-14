/*
    APPROACH - We maintain 3 references, 1 for previous node, 1 current node, and 1 next node so we dont lose the track of Original Linked List
*/

let {SinglyLinkedList} = require('./SinglyLinkedList.js')

function reverseSinglyLinkedList(list, headnode) {
    if(list.isEmpty() || list.length==1) {
        return
    }
    let currentnode = headnode
    let previousnode = null
    let nextnode = currentnode.next
    list.tail = headnode

    while(currentnode.next!=null) {
        currentnode.next = previousnode
        previousnode = currentnode
        currentnode = nextnode
        nextnode = nextnode.next
    }

    currentnode.next = previousnode
    list.head = currentnode
}



let list = new SinglyLinkedList()
list.pushBack(10)
list.pushBack(20)
list.pushBack(30)
list.pushBack(40)
list.pushBack(50)

console.log(list.head)
console.log(list.tail)
list.print()
console.log("\n\n---------------------------After Reversing Linked List---------------------------\n\n")
reverseSinglyLinkedList(list, list.head)
list.print()
console.log(list.head)
console.log(list.tail)