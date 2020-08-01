class Node{
    constructor(key, val) {
        this.key = key
        this.data = val
    }
}

class HashTable {
    constructor(size=63) {
        this.list = new Array(size)
    }

    hash(key) {
        let total = 0
        let prime = 67
        for(let i=0; i<Math.min(key.length, 100); i++) {
            total = (total*prime)+key[i].charCodeAt(0)
            total = total%this.list.length
        }

        return total
    }

    set(key, val) {
        let newnode = new Node(key, val)
        let index = this.hash(key)
        if(this.list[index]==undefined) {
            this.list[index] = []
            this.list[index].push(newnode)
        }
        else {
            this.list[index].push(newnode)
        }
    }

    get(key) {
        let index = this.hash(key)
        if(this.list[index]==undefined) {
            return `Key is Not Present in the Hash Table`
        }
        else if(this.list[index].length>1) {
            for(let node of this.list[index]) {
                if(node.key == key) {
                    return node
                }
            }
        }
        else {
            return this.list[index][0]
        }
    }

    show() {
        console.log(this.list)
    }
}

let hashmap = new HashTable()
hashmap.show()

hashmap.set("ReflxzR", "Best Gamer")
hashmap.set("ReflxzR", "Okayish Average Noobla :-|")
hashmap.set("jAnzWE", "JS PRO")
hashmap.set("qLimAxz", "Just another Noobda :-)")
hashmap.set("rEplan", "The Mastermind")
console.log("\n")
hashmap.show()
console.log("\n")
console.log(hashmap.get("ReflxzR"))
console.log("\n")
console.log(hashmap.get("kEX"))