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

let graph = new Graph()

graph.addVertex("ReflxzR")
graph.addVertex("jAnzWE")
graph.addVertex("rEplan")
graph.addVertex("qLimAxz")
console.log("\n")
graph.show()
console.log("\n")
graph.addEdge("ReflxzR", "jAnzWE")
graph.addEdge("ReflxzR", "rEplan")
graph.addEdge("qLimAxz", "jAnzWE")
graph.addEdge("rEplan", "jAnzWE")
console.log("\n")
graph.show()