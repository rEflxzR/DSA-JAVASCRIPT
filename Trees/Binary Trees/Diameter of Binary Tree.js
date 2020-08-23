let {Node, BinaryTree} = require('../BINARY TREE NODE.js')

/*
    TRAVERSE THE LEFT AND RIGHT SUBTREE, AND FOR EACH NODE YOU CALCULATE THE DIAMETER AND UPDATE THE RESULT
    WHEN IT IS GREATER THAN PREVIOUS
    THE DIAMETER FOR ANY NODE WOULD 1 (THE NODE ITSELF) + HEIGHT OF LEFT SUBTREE + HEIGHT OF RIGHT SUBTREE
*/


let result = 0

function diameterOfBinaryTree(rootnode) {
    if(!rootnode) {
        return 0
    }

    let left = diameterOfBinaryTree(rootnode.left)
    let right = diameterOfBinaryTree(rootnode.right)

    result = Math.max(result, 1+left+right)

    return 1 + Math.max(left, right)

}


let tree = new BinaryTree()
tree.root = new Node(10)
tree.root.left = new Node(20)
tree.root.left.right = new Node(70)
tree.root.left.right.right = new Node(80)
tree.root.left.right.right.right = new Node(90)
tree.root.left.left = new Node(30)
tree.root.left.left.right = new Node(50)
tree.root.left.left.left = new Node(40)
tree.root.left.left.left.left = new Node(60)
tree.root.right = new Node(60)

diameterOfBinaryTree(tree.root)
console.log(result)