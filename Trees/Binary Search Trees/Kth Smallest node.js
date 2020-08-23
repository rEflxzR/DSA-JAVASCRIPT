class Node {
    constructor(val) {
        this.left = null
        this.right = null
        this.data = val
        this.lchild = 0
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
}


function insertModifiedBST(val, rootnode, tree) {
    if(!rootnode) {
        let newnode = new Node(val)
        tree.root = newnode
        return newnode
    }

    if(val<rootnode.data) {
        rootnode.lchild++

        if(!rootnode.left) {
            let newnode = new Node(val)
            rootnode.left = newnode
            return newnode
        }
        return insertModifiedBST(val, rootnode.left)
    }

    else {
        if(!rootnode.right) {
            let newnode = new Node(val)
            rootnode.right = newnode
            return newnode
        }
        return insertModifiedBST(val, rootnode.right)
    }
}


function KthSmallestElement(rootnode, k) {
    if(k==rootnode.lchild+1) {
        return rootnode.data
    }

    else if(k<rootnode.lchild+1) {
        return KthSmallestElement(rootnode.left, k)
    }

    else {
        return KthSmallestElement(rootnode.right, k-rootnode.lchild-1)
    }
}


let tree = new BinaryTree()

insertModifiedBST(50, tree.root, tree)
insertModifiedBST(20, tree.root, tree)
insertModifiedBST(10, tree.root, tree)
insertModifiedBST(4, tree.root, tree)
insertModifiedBST(40, tree.root, tree)
insertModifiedBST(100, tree.root, tree)
insertModifiedBST(120, tree.root, tree)
insertModifiedBST(70, tree.root, tree)
insertModifiedBST(80, tree.root, tree)
insertModifiedBST(60, tree.root, tree)

console.log(KthSmallestElement(tree.root, 7))
console.log(KthSmallestElement(tree.root, 3))
console.log(KthSmallestElement(tree.root, 5))