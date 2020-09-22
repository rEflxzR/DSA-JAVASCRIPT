let {Graph} = require('../Graph.js')
let {Queue} = require('../../Queues/Queue.js')

function breadthFirstSearch(rootvertex, visit) {
    let queue = new Queue()
    queue.enqueue(rootvertex)

    while(!queue.isEmpty()) {
        let v = queue.dequeue().data
        for(let n of graph.list[v]) {
            if(visit[n]==undefined) {
                queue.enqueue(n)
                visit[n] = true
            }
        }
        console.log(v)
    }
}

function BFSDisconnected() {

    let visited = {}
    let count = 0

    for(let vertex of Object.keys(graph.list)) {
        if(visited[vertex]==undefined) {
            count++
            visited[vertex] = true
            breadthFirstSearch(vertex, visited)
        }
    }
    console.log(`\n\nTotal Number of Disconnected Graphs: ${count}`)
}


let graph = new Graph()
// graph.addVertex(1)
// graph.addVertex(2)
// graph.addVertex(3)
// graph.addVertex(4)
// graph.addVertex(5)
// graph.addVertex(6)
// graph.addVertex(7)
// graph.addVertex(8)
// graph.addVertex(9)

// graph.addEdge(1,2)
// graph.addEdge(1,3)
// graph.addEdge(2,3)
// graph.addEdge(4,5)
// graph.addEdge(6,7)
// graph.addEdge(6,8)
// graph.addEdge(8,9)

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(0)

graph.addEdge(0,1)
graph.addEdge(0,2)
graph.addEdge(1,3)
graph.addEdge(2,3)
graph.addEdge(1,4)
graph.addEdge(4,5)


BFSDisconnected()