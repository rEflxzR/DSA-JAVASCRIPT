class Node {
    constructor(val) {
        this.data = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newnode = new Node(val)
        if(!this.root) {
            this.root = newnode
        }
        else {
            let temp = this.root
            while(true) {
                if(newnode.data < temp.data) {
                    if(!temp.left) {
                        temp.left = newnode
                        break
                    }
                    else {
                        temp = temp.left
                        continue
                    }
                }
                else{
                    if(!temp.right) {
                        temp.right = newnode
                        break
                    }
                    else {
                        temp = temp.right
                        continue
                    }
                }
            }

            return this
        }
    }

    find(val) {
        let temp = this.root
        while(temp!=null) {
            if(val == temp.data) {
                return `Node with value ${val} is Present in the BST\n`
            }
            else if(val < temp.data) {
                temp = temp.left
            }
            else {
                temp = temp.right
            }
        }
        return `Node with value ${val} is NOT Present in the BST\n`
    }

    height() {
        let maxleft = 0
        let maxright = 0
        let temp = this.root

        function BSTHeight(root) {
            if(!root) {
                return -1
            }

            maxleft = BSTHeight(root.left)
            maxright = BSTHeight(root.right)

            return Math.max(maxleft, maxright)+1
        }

        return BSTHeight(temp)
    }
}

module.exports.Node = Node
module.exports.BinarySearchTree = BinarySearchTree