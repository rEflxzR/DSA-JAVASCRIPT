/*
    DFS INORDER TRAVERSAL ===== LEFT -> NODE -> RIGHT
    FOR INORDER TRAVERSAL -- KEEP GOING TILL LEFT TILL THE ROOT NODE PASSED BECOMES NULL
    THEN RETURN BACK
    NOW PUSH THE ROOT NODE DATA
    NOW CHECK FOR RIGHT SIDE OF THE ROOT NODE
    THRE RETURN STATEMENT AT THE END RETURNS THE ARRAY BUT THAT IS NOT UTILIZED ANYWHERE SO RESULTS ARE NOT AFFECTED
*/

function depthFirstSearchInorder(node, arr=[]) {
    if(!node) {
        return
    }

    depthFirstSearchInorder(node.left, arr)
    arr.push(node.data)
    depthFirstSearchInorder(node.right, arr)

    return arr
}

class Node {
    constructor(val) {
        this.data = val
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
}

let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(6)
tree.root.right = new Node(15)
tree.root.left.left = new Node(3)
tree.root.left.right = new Node(8)
tree.root.right.right = new Node(20)

console.log(depthFirstSearchInorder(tree.root))