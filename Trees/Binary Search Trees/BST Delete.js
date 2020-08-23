let {Node, BinaryTree} = require('../BINARY TREE NODE.js')


function getSuccessor(rootnode) {
    let temp = rootnode.right
    while(temp!=null && temp.left!=null) {
        temp = temp.left
    }
    return temp
}

function deleteBST(val, rootnode) {
    if(!rootnode) {
        return null
    }

    if(val<rootnode.data) {
        rootnode.left = deleteBST(val, rootnode.left)
    }

    else if(val>rootnode.data) {
        rootnode.right = deleteBST(val, rootnode.right)
    }

    else {
        if(!rootnode.left) {
            return rootnode.right
        }
        else if(!rootnode.right) {
            return rootnode.left
        }
        else {
            let temp = getSuccessor(rootnode)
            let tempdata = temp.data
            temp.data = rootnode.data
            rootnode.data = tempdata
            rootnode.right = deleteBST(temp.data, rootnode.right)
        }

        return rootnode
    }
}



let tree = new BinaryTree()
tree.root = new Node(50)
tree.root.left = new Node(30)
tree.root.left.left = new Node(20)
tree.root.left.right = new Node(40)
tree.root.right = new Node(70)
tree.root.right.left = new Node(60)
tree.root.right.left.left = new Node(55)
tree.root.right.right = new Node(80)

deleteBST(70, tree.root)
console.log(tree)