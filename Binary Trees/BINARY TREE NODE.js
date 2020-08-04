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

module.exports.Node = Node
module.exports.BinaryTree = BinaryTree