let {Node, BinaryTree} = require('./Binary Tree Node.js')

let tree = new BinaryTree()
tree.root = new Node(10)
tree.root.left = new Node(20)
tree.root.right = new Node(30)
tree.root.left.left = new Node(40)
tree.root.left.right = new Node(50)
tree.root.left.right.right = new Node(60)
tree.root.left.right.right.right = new Node(70)


/*
    APPROACH - We Start from 1 as Rootnode, then we add the Maximum height of Left Sub-Tree and Right Sub-Tree
               We keep on adding 1 for both the left and right sub-tree at each level and finally return the maximum of left or right
               When we hit null, we come back with -1 to subtract 1 from the final result to get actual height

*/
function heightBinaryTree(rootnode) {
    if(!rootnode) {
        return 0
    }

    return 1 + Math.max(heightBinaryTree(rootnode.left), heightBinaryTree(rootnode.right))
}

console.log(heightBinaryTree(tree.root)-1)