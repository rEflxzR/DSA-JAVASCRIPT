let {Node, BinaryTree} = require('./Binary Tree Node.js')

let tree = new BinaryTree()
tree.root = new Node(10)
tree.root.left = new Node(6)
tree.root.right = new Node(8)
tree.root.right.right = new Node(7)
tree.root.right.right.left = new Node(11)
tree.root.right.right.right = new Node(12)


function nodesAtKlevel(rootnode, level) {
    if(!rootnode) {
        return
    }
    if(!level) {
        console.log(rootnode.data)
    }

    let left = nodesAtKlevel(rootnode.left, level-1)
    let right = nodesAtKlevel(rootnode.right, level-1)
}

nodesAtKlevel(tree.root, 3)