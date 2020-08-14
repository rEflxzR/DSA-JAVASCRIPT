let {Node, BinaryTree} = require('./BINARY TREE NODE.js')


function lowestCommonAncestor(rootnode, n1, n2) {
    if(!rootnode) {
        return null
    }

    if(rootnode.data==n1 || rootnode.data==n2) {
        return rootnode
    }

    let left = lowestCommonAncestor(rootnode.left, n1, n2)
    let right = lowestCommonAncestor(rootnode.right, n1, n2)

    if(left!=null && right!=null) {
        return rootnode
    }

    if(left!=null) {
        return left
    }
    else {
        return right
    }
}


let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(20)
tree.root.right = new Node(30)
tree.root.right.left = new Node(50)
tree.root.right.left.left = new Node(70)
tree.root.right.right = new Node(60)
tree.root.right.right.left = new Node(80)
tree.root.right.right.right = new Node(90)
tree.root.right.right.right.right = new Node(40)


console.log(lowestCommonAncestor(tree.root, 50, 80))