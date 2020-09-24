// TRIE NODE AND TRIE CLASS

class TrieNode {
    constructor(size=26) {
        this.array = new Array(size).fill(null)
        this.isEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    isEmpty(rootnode) {
        for(let i=0; i<26; i++) {
            if(rootnode.array[i]!=null) {
                return false
            }
        }
        return true
    }

    insert(str) {
        let n = str.length
        let currentnode = this.root
        let baseindex = "a".charCodeAt()
        for(let i=0; i<n; i++) {
            let index = str[i].charCodeAt()-baseindex

            if(currentnode.array[index]==null) {
                let newnode = new TrieNode()
                currentnode.array[index] = newnode
                currentnode = newnode
            }
            else {
                currentnode = currentnode.array[index]
            }

        }
        currentnode.isEnd = true
    }

    search(str) {
        let n = str.length
        let currentnode = this.root
        let baseindex = "a".charCodeAt()

        for(let i=0; i<n; i++) {
            let index = str[i].charCodeAt()-baseindex
            if(currentnode.array[index]==null) {
                return false
            }
            currentnode = currentnode.array[index]
        }
        if(currentnode.isEnd==false) {
            return false
        }
        return true
    }

    delete(str, rootnode=this.root, index=0) {
        let nodeindex = str[index].charCodeAt()-"a".charCodeAt()

        if(index==str.length-1) {
            if(this.isEmpty(rootnode.array[nodeindex])) {
                return rootnode = null
            }
            rootnode.array[nodeindex].isEnd = false
            return rootnode
        }

        rootnode.array[nodeindex] = this.delete(str, rootnode.array[nodeindex], index+1)
        if(this.isEmpty(rootnode)) {
            return rootnode = null
        }
        return rootnode
    }
}

module.exports.TrieNode = TrieNode
module.exports.Trie = Trie