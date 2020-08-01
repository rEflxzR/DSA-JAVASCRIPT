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
                else {
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
}

let tree = new BinarySearchTree()

tree.root = new Node(10)
tree.root.left = new Node(7)
tree.root.right = new Node(17)
tree.root.left.left = new Node(4)
tree.root.left.right = new Node(9)
tree.root.right.right = new Node(23)
tree.root.right.left = new Node(13)

console.log(tree.insert(37))
console.log("\n")
console.log(tree.root.right.right.right)
