let {GraphMinHeap, UndirectedWeightedGraph} = require('./Graph.js')

function minimumSpanningTree(graph, sourcevertex) {
    let mstset = {}
    let minheap = new GraphMinHeap()
    let distance = {}

    for(let v of Object.keys(graph.list)) {
        if(v!=sourcevertex) {
            minheap.insert(v)
            distance[v] = Infinity
        }
    }
    minheap.insert(sourcevertex, 0)
    distance[sourcevertex] = 0

    while(minheap.list.length) {
        let mv = minheap.extractMin().vertex
        mstset[mv] = true

        for(let nv of graph.list[mv]) {
            if(mstset[nv.vertex]==undefined) {
                distance[nv.vertex] = Math.min(distance[nv.vertex], nv.weight)
                for(let i=0; i<minheap.list.length; i++) {
                    if(minheap.list[i].vertex==nv.vertex) {
                        if(minheap.list[i].weight>distance[nv.vertex]) {
                            minheap.list[i].weight = distance[nv.vertex]
                            minheap.heapifyUp(i)
                        }
                    }
                }
            }
        }
    }

    return distance
}


let graph = new UndirectedWeightedGraph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")

// graph.addEdge("A", "B", 5)
// graph.addEdge("A", "C", 10)
// graph.addEdge("B", "C", 6)
// graph.addEdge("B", "D", 15)
// graph.addEdge("C", "D", 20)
// console.log(minimumSpanningTree(graph, "A"))
// console.log(minimumSpanningTree(graph, "D"))


graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)

graph.addEdge(1,2,2)
graph.addEdge(2,3,3)
graph.addEdge(1,4,6)
graph.addEdge(2,4,8)
graph.addEdge(2,5,5)
graph.addEdge(3,5,7)
console.log(minimumSpanningTree(graph, 1))