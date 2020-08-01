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

    show() {
        console.log(this.list)
    }
}

function breadthFirstSearch(g, v) {
    let queue = [v]
    let arr = []
    let obj = {}
    obj[v] = true

    while(queue.length) {
        let vertex = queue.shift()
        arr.push(vertex)

        for(let nv of g.list[vertex]) {
            if(!obj[nv]) {
                obj[nv] = true
                queue.push(nv)
            }
        }
    }
    return arr
}

let graph = new Graph()

graph.addVertex("ReflxzR")
graph.addVertex("mInXZkA")
graph.addVertex("jAnzWE")
graph.addVertex("rEplan")
graph.addVertex("qLimAxz")
graph.addEdge("ReflxzR", "jAnzWE")
graph.addEdge("ReflxzR", "mInXZkA")
graph.addEdge("ReflxzR", "rEplan")
graph.addEdge("qLimAxz", "jAnzWE")
graph.addEdge("mInXZkA", "rEplan")
graph.addEdge("mInXZkA", "qLimAxz")
graph.addEdge("mInXZkA", "jAnzWE")
graph.addEdge("rEplan", "jAnzWE")
graph.show()
console.log("\n")
console.log(breadthFirstSearch(graph, "qLimAxz"))
console.log("\n")