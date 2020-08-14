/*
    SIZE OF A BINARY TREE MEANS THE NUMBER OF NODES THAT ARE PRESENT IN THE BINARY TREE
*/

let {Node, BinaryTree} = require('./Binary Tree Node.js')

let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(7)
tree.root.right = new Node(17)
tree.root.left.left = new Node(4)
tree.root.left.left.right = new Node(67)
tree.root.left.right = new Node(9)
tree.root.right.left = new Node(13)
tree.root.right.right = new Node(23)


// APPROACH - count the root node as 1, now recursively call the function for left sub-tree and right sub-tree

function sizeOfBinaryTree(rootnode) {
    if(!rootnode) {
        return 0       // If the next node hits null, come back and return 0
    }

    // Start with the root as 1, at each and every level for left and right child, keep adding 1
    return 1 + sizeOfBinaryTree(rootnode.left) + sizeOfBinaryTree(rootnode.right)
}

console.log(sizeOfBinaryTree(tree.root))