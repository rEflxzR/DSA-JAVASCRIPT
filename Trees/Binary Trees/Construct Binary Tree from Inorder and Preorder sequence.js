let {Node, BinaryTree} = require('../BINARY TREE NODE.js')

let preorderindex = 0
function binaryTree(inorder, preorder, inorderstart=0, inorderend=inorder.length-1) {

    if(inorderstart > inorderend) {
        return null
    }

    let root = new Node(preorder[preorderindex])
    preorderindex++

    let inorderindex = inorder.indexOf(root.data)

    root.left = binaryTree(inorder, preorder, inorderstart, inorderindex-1)
    root.right = binaryTree(inorder, preorder, inorderindex+1, inorderend)

    return root

}


let tree = new BinaryTree()
tree.root = binaryTree([40, 20, 50, 10, 30, 80, 70, 90], [10, 20, 40, 50, 30, 70, 80, 90])

console.log(tree.root.data)
console.log(tree.root.left.data)
console.log(tree.root.left.left.data)
console.log(tree.root.left.right.data)
console.log(tree.root.right.data)
console.log(tree.root.right.right.data)
console.log(tree.root.right.right.left.data)
console.log(tree.root.right.right.right.data)