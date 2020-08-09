let {BinaryTree} = require('./BINARY TREE NODE.js')

/*
    WE HAVE TO CONVERT THE TREE INTO DOUBLY LINKED LIST. THE ORDER OF LINKED LIST NODES WOULD BE INORDER
    TRAVERSAL OF TREE. WE MAINTAIN A GLOBAL PREVIOUS REFERENCE SO WE CAN LINK THE CURRENT NODE WITH PREVIOUS ONES
*/


let previous = null

function convertTreeToLinkedList(tree, rootnode) {
    if(!rootnode) {
        return
    }

    convertTreeToLinkedList(tree, rootnode.left)
    if(previous==null) {
        tree.root = rootnode
        rootnode.left = previous
    }
    else {
        rootnode.left = previous
        previous.right = rootnode
    }
    previous = rootnode

    convertTreeToLinkedList(tree, rootnode.right)

    return tree
}




let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(20)
tree.root.right = new Node(30)
tree.root.right.left = new Node(40)
tree.root.right.right = new Node(50)

let mytree = convertTreeToLinkedList(tree, tree.root)
let temp = mytree.root
while(temp != null) {
    console.log(temp.data)
    temp = temp.right
}

// AN ALTERNATIVE APPROACH WOULD BE TO TRAVERSE THE TREE IN INORDER FASHION AND CREATE A NEW DOUBLY LINKED LIST BY IMPORTING DLL CLASS AND USING TREE NODE DATA