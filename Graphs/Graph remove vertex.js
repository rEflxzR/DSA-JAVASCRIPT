// TO DELETE A KEY FROM AN OBJECT, WE USE delete object_name[key] SYNTAX

class Graph {
    constructor() {
        this.list = {}
    }

    addVertex(v) {
        this.list[v] = []
    }

    addEdge(v1, v2) {
        let vertex1 = this.list[v1]
        let vertex2 = this.list[v2]

        vertex1.push(v2)
        vertex2.push(v1)
    }

    removeEdge(v1, v2) {
        let vertex1 = this.list[v1]
        let vertex2 = this.list[v2]

        let n2 = vertex1.indexOf(v2)
        let n1 = vertex2.indexOf(v1)

        let arr = vertex1.splice(n2+1)
        vertex1.pop()
        this.list[v1] = vertex1.concat(arr)

        arr = vertex2.splice(n1+1)
        vertex2.pop()
        this.list[v2] = vertex2.concat(arr)
    }
    
    removeVertex(v) {
        let arr = this.list[v]
        for(let vertex of arr) {
            this.removeEdge(v, vertex)
        }
        delete this.list[v]
    }

    // removeVertex(v) {                                // LONG METHOD
    //     let arr = this.list[v]
    //     for(let vertex of arr) {
    //         let newarr = this.list[vertex]
    //         let n = newarr.indexOf(v)
    //         let a = newarr.splice(n+1)
    //         newarr.pop()
    //         this.list[vertex] = newarr.concat(a)
    //     }
    //     delete this.list[v]
    // }

    show() {
        console.log(this.list)
    }
}

let graph = new Graph()

graph.addVertex("ReflxzR")
graph.addVertex("mInXZkA")
graph.addVertex("jAnzWE")
graph.addVertex("rEplan")
graph.addVertex("jAniMAL")
graph.addVertex("qLimAxz")
console.log("\n")
graph.show()
console.log("\n")
graph.addEdge("ReflxzR", "jAnzWE")
graph.addEdge("ReflxzR", "mInXZkA")
graph.addEdge("ReflxzR", "jAniMAL")
graph.addEdge("ReflxzR", "rEplan")
graph.addEdge("ReflxzR", "qLimAxz")
graph.addEdge("qLimAxz", "jAnzWE")
graph.addEdge("mInXZkA", "rEplan")
graph.addEdge("mInXZkA", "qLimAxz")
graph.addEdge("mInXZkA", "jAnzWE")
graph.addEdge("rEplan", "jAnzWE")
console.log("\n")
graph.show()
console.log("\n")
graph.removeVertex("rEplan")
graph.removeVertex("jAnzWE")
graph.show()