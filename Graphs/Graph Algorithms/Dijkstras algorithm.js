class PriorityQueue {
    constructor() {
        this.list = []
    }

    enqueue(v, distance=Infinity) {
        this.list.push({vertex: v, distance: distance})
    }

    dequeue() {
        return this.list.shift()
    }

    sort() {
        this.list.sort((a, b) => {
            return a.distance - b.distance
        })
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(this.adjacencyList[vertex]==undefined) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(v1, v2, w) {
        this.adjacencyList[v1].push({vertex: v2, weight: w})
        this.adjacencyList[v2].push({vertex: v1, weight: w})
    }

    show() {
        console.log(this.adjacencyList)
    }
}

function shortestPath(v1, v2, graph) {
    let pqueue = new PriorityQueue()
    let shortestpath = []
    let visited = []
    let previous = {}
    let distance = {}

    for(let vertex of Object.keys(graph.adjacencyList)) {
        previous[vertex] = null
        if(vertex==v1) {
            distance[vertex] = 0
            pqueue.enqueue(vertex, 0)
        }
        else {
            distance[vertex] = Infinity
            pqueue.enqueue(vertex)
        }
    }

    pqueue.sort()

    while(pqueue.list.length) {
        if(pqueue.list.length==1) {
            let pathv = v2
            while(pathv!=v1) {
                shortestpath.push(pathv)
                pathv = previous[pathv]
            }
            shortestpath.push(v1)
        }

        let vertex = pqueue.dequeue()
        visited.push(vertex.vertex)
        let newarr = graph.adjacencyList[vertex.vertex]
        for(let nv of newarr) {
            if(!visited.includes(nv.vertex)) {
                let d = nv.weight + distance[vertex.vertex]
                if(d<distance[nv.vertex]) {
                    distance[nv.vertex] = d
                    previous[nv.vertex] = vertex.vertex
                    for(let v of pqueue.list) {
                    if(v.vertex==nv.vertex) {
                            v.distance = d
                            pqueue.sort()
                        }   
                    }
                }
            }
        }
    }

    console.log(shortestpath.reverse())
    return distance[v2]
}

let graph = new WeightedGraph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)
graph.show()
console.log("\n\n")
console.log(shortestPath("A", "E", graph))
console.log("\n")
console.log(shortestPath("D", "E", graph))
console.log("\n")
console.log(shortestPath("F", "A", graph))