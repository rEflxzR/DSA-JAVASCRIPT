let {Node, BinaryTree} = require('./BINARY TREE NODE.js')

let tree = new BinaryTree()

// tree.root = new Node(10)
// tree.root.left = new Node(20)
// tree.root.right = new Node(10)
// tree.root.left.left = new Node(40)
// tree.root.left.right = new Node(50)
// tree.root.right.right = new Node(30)

tree.root = new Node(10)
tree.root.left = new Node(20)
tree.root.left = new Node(30)
tree.root.left.right = new Node(50)
tree.root.left.left = new Node(40)
tree.root.left.left.left = new Node(60)
tree.root.left.left.left.left = new Node(70)




function burnBinaryTree(tree, rootnode) {
    if(!rootnode) {
        return
    }

    burnBinaryTree(rootnode.left)
    rootnode.left=null
    burnBinaryTree(rootnode.right)
    rootnode.right=null

    if(!tree.root.left && !tree.root.right) {
        tree.root = null
    }

    return tree
}


console.log(burnBinaryTree(tree, tree.root))