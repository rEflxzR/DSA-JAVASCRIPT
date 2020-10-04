let {GraphMinHeap, UndirectedWeightedGraph} = require('./Graph.js')

function djikstrasAlgorithm(graph, sourcevertex) {
    let distance = {}
    let visited = {}
    let minheap = new GraphMinHeap()

    for(let vertex of Object.keys(graph.list)) {
        if(vertex!=sourcevertex) {
            distance[vertex] = Infinity
            minheap.insert(vertex)
        }
    }
    minheap.insert(sourcevertex, 0)
    distance[sourcevertex] = 0

    while(minheap.list.length) {
        let vertex = minheap.extractMin().vertex
        visited[vertex] = true

        for(let nv of graph.list[vertex]) {
            if(visited[nv.vertex]==undefined) {
                distance[nv.vertex] = Math.min(distance[nv.vertex], distance[vertex]+nv.weight)
                for(let i=0; i<minheap.list.length; i++) {
                    if(minheap.list[i].vertex==nv.vertex) {
                        minheap.list[i].weight = distance[nv.vertex]
                        minheap.heapifyUp(i)
                    }
                }
            }
        }
    }

    return distance
}



let graph = new UndirectedWeightedGraph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addVertex("H")
graph.addVertex("I")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 8)
graph.addEdge("B", "C", 11)
graph.addEdge("B", "D", 8)
graph.addEdge("D", "E", 2)
graph.addEdge("C", "E", 7)
graph.addEdge("C", "F", 1)
graph.addEdge("E", "F", 6)
graph.addEdge("D", "G", 7)
graph.addEdge("D", "H", 4)
graph.addEdge("F", "H", 2)
graph.addEdge("G", "H", 14)
graph.addEdge("G", "I", 9)
graph.addEdge("H", "I", 10)

console.log(djikstrasAlgorithm(graph, "A"))