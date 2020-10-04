let {DirectedGraph} = require('./Graph.js')
let {Stack} = require('../Stacks/Stack.js')

function depthFirstSearch(graph, v, arr, visit={}) {
    visit[v] = true
    for(let vertex of graph.list[v]) {
        if(visit[vertex]==undefined) {
            depthFirstSearch(graph, vertex, arr, visit)
        }
    }
    arr.push(v)
}


function stronglyConnectedComponents(graph) {
    let newgraph = new DirectedGraph()
    let visited = {}
    let stack = new Stack()

    for(let v of Object.keys(graph.list)) {
        newgraph.addVertex(v)
    }
    for(let v of Object.keys(graph.list)) {
        for(let nv of graph.list[v]) {
            newgraph.addEdge(nv, v)
        }
    }

    for(let v of Object.keys(graph.list)) {
        if(visited[v]==undefined) {
            depthFirstSearch(graph, v, stack, visited)
        }
    }

    visited = {}
    while(!stack.isEmpty()) {
        let arr = []
        let vertex = stack.pop()
        if(visited[vertex]==undefined) {
            depthFirstSearch(newgraph, vertex, arr, visited)
        }
        if(arr.length) {
            console.log(arr)
        }
    }

}


let graph = new DirectedGraph()
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)

graph.addEdge(1,2)
graph.addEdge(2,3)
graph.addEdge(3,1)
graph.addEdge(2,4)
graph.addEdge(4,5)


stronglyConnectedComponents(graph)