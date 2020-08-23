/*
    FOR DFS POSTORDER ===== LEFT -> RIGHT -> NODE
    KEEP GOING TO THE LEFT SIDE OF THE TREE, WHEN YOU REACH LEAF NODE. YOU PUSH THAT DATA
    THEN GO BACK AND CALL THE FUNCTION FOR THE RIGHT SIDE AND PUSH RIGHT SIDE DATA
    THEN FINALLY PUSH THE MAIN ROOT NODE DATA
*/

let {Node, BinaryTree} = require('../../BINARY TREE NODE.js')

let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(6)
tree.root.right = new Node(15)
tree.root.left.left = new Node(3)
tree.root.left.right = new Node(8)
tree.root.right.right = new Node(20)


function depthFirstSearchPostOrder(node, arr=[]) {
    if(!node) {
        return
    }
    depthFirstSearchPostOrder(node.left, arr)
    depthFirstSearchPostOrder(node.right, arr)
    arr.push(node.data)

    return arr
}

console.log(depthFirstSearchPostOrder(tree.root))