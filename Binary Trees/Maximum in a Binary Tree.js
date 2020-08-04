/*
    FOR THIS PROBLEM, WE HAVE TO FIND OUT THE MAXIMUM VALUE NODE PRESENT IN THE BINARY TREE
*/

let {Node, BinaryTree} = require('./Binary Tree Node.js')

let tree = new BinaryTree()

tree.root = new Node(20)
tree.root.left = new Node(10)
tree.root.right = new Node(30)
tree.root.right.left = new Node(40)
tree.root.right.right = new Node(50)


// APPROACH - Compare the Maximum value of Rootnode, Maximum from Left Sub-tree, Maximum from Right Sub-tree

function getMaximumNodeValue(rootnode) {
    if(!rootnode) {
        return -Infinity
    }

    return Math.max(rootnode.data, Math.max(getMaximumNodeValue(rootnode.left), getMaximumNodeValue(rootnode.right)))
}

console.log(getMaximumNodeValue(tree.root))