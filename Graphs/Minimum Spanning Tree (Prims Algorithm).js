let {UndirectedWeightedGraph} = require('./Graph.js')

function minimumSpanningTree(graph, sourcevertex) {
    let mstset = {}
    let nonmst = {}
    let mst = 0

    for(let vertex of Object.keys(graph.list)) {
        vertex==sourcevertex ? mstset[vertex] = true : nonmst[vertex] = true
    }

    while(Object.keys(nonmst).length!=0) {
        let min = Infinity
        let v = null
        let vert = null
        for(let vertex of Object.keys(mstset)) {
            for(let nv of graph.list[vertex]) {
                if(nv.weight<min && mstset[nv.vertex]==undefined) {
                    min = nv.weight
                    v = nv.vertex
                    vert = vertex
                }
            }
        }
        mst = mst + min
        mstset[v] = vert
        delete nonmst[v]
    }

    console.log(`Minimum Spanning Length of Graph - ${mst}`)
    return mstset
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