let {Node, BinaryTree} = require('../BINARY TREE NODE.js')

function insertBST(val, rootnode, tree) {
    if(!rootnode) {
        let newnode = new Node(val)
        tree.root = newnode
        return newnode
    }

    if(val<rootnode.data) {
        if(!rootnode.left) {
            let newnode = new Node(val)
            rootnode.left = newnode
            return newnode
        }
        return insertBST(val, rootnode.left)
    }

    else {
        if(!rootnode.right) {
            let newnode = new Node(val)
            rootnode.right = newnode
            return newnode
        }
        return insertBST(val, rootnode.right)
    }
}



let tree = new BinaryTree()


tree.root = new Node(10)                           // INSERTED RIGHT MOST NODE IN RIGHT SUB TREE
tree.root.left = new Node(5)
tree.root.right = new Node(15)
tree.root.right.left = new Node(12)
tree.root.right.right = new Node(18)
insertBST(30, tree.root, tree)
console.log(tree.root.right.right.right)


tree.root = null                                  // INSERTED NODE BECOMES ROOT OF TREE
insertBST(10, tree.root, tree)
console.log(tree)


tree.root = new Node(8)                              // INSERTED IN RIGHT SIDE OF LEFT SUB-TREE NODE
tree.root.left = new Node(5)
tree.root.right = new Node(5)
insertBST(7, tree.root, tree)
console.log(tree.root.left.right)