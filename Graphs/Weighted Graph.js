

class WeightedGraph {
    constructor() {
        this.list = {}
    }

    addVertex(vertex) {
        if(this.list[vertex]==undefined) {
            this.list[vertex] = []
        }
    }

    addEdge(v1, v2, w) {
        this.list[v1].push({vertex: v2, weight: w})
        this.list[v2].push({vertex: v1, weight: w})
    }

    removeVertex(v) {
        for(let nv of this.list[v]) {
            let i=0
            for(i=0; i<this.list[nv.vertex]; i++) {
                if(this.list[nv.vertex][i].vertex == v) {
                    break
                }
            }
            let a = this.list[nv.vertex].splice(i+1)
            this.list[nv.vertex].pop()
            this.list[nv.vertex] = this.list[nv.vertex].concat(a)
        }
        delete this.list[v]
    }

    removeEdge(v1, v2) {
        let i, a
        for(i=0; i<this.list[v1]; i++) {
            if(this.list[v1][i].vertex==v2) {
                break
            }
        }
        a = this.list[v1].splice(i+1)
        this.list[v1].pop()
        this.list[v1] = this.list[v1].concat(a)
        if(this.list[v1].length==0) {
            this.removeVertex(v1)
        }

        for(i=0; i<this.list[v2]; i++) {
            if(this.list[v2][i].vertex==v1) {
                break
            }
        }
        a = this.list[v2].splice(i+1)
        this.list[v2].pop()
        this.list[v2] = this.list[v2].concat(a)
        if(this.list[v2].length==0) {
            this.removeVertex(v2)
        }
    }

    show() {
        console.log(this.list)
    }
}

let graph = new WeightedGraph()

graph.addVertex("ReflxzR")
graph.addVertex("jAnzWE")
graph.addVertex("rEplan")
graph.addVertex("qLimAxz")
console.log("\n")
graph.show()
console.log("\n")
graph.addEdge("ReflxzR", "jAnzWE", 17)
graph.addEdge("ReflxzR", "rEplan", 13)
graph.addEdge("qLimAxz", "jAnzWE", 35)
graph.addEdge("rEplan", "jAnzWE", 23)
console.log("\n")
graph.show()
console.log("\n")
graph.removeVertex("ReflxzR")
console.log("\n")
graph.show()
console.log("\n")
graph.removeEdge("qLimAxz", "jAnzWE")
graph.show()