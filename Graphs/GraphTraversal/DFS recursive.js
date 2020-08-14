/*
    FOR GRAPH DFS TRAVERSAL USING RECURSION
    CALL THE FUNCTION WITH A BLANK OBJECT AND A BLANK ARRAY
    IF THE VERTEX HAS NO NEIGHBOURS OR IS NOT CONNECTED TO ANY VERTEX, THEN JUST RETURN BACK
    PUSH THE CURRENT VERTEX IN THE THE ARRAY
    PUSH THE CURRENT VERTEX IN THE OBJECT AS KEY AND SET ITS VALUE AS TRUE
    NOW RECURSIVELY CALL THE FUNCTION FOR EACH FOR THE NEIGHBOUR OF THE CURRENT VERTEX
        TRAVERSE THROUGH ALL THE VERTICES OF THE CURRENT VERTEX
        IF THE VERTEX IS NOT MARKED AS TRUE IN THE OBJECT, THEN AGAIN CALL THE FUNCTION WHICH PUSHES
        THE VERTEX INTO THE ARRAY AND MOVES ON TO ITS NEIGHBOURS
*/

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

function dfsRecursive(g, v, obj={}, arr=[]) {
    if(!g.list[v].length) {
        return
    }
    arr.push(v)
    obj[v] = true
    for(let vertex of g.list[v]) {
        if(!obj[vertex]) {
            dfsRecursive(g, vertex, obj, arr)
        }
    }
    return arr
}

let graph = new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")
// graph.addVertex("F")
// console.log("\n")
// graph.show()
// console.log("\n")
// graph.addEdge("A", "B")
// graph.addEdge("A", "C")
// graph.addEdge("B", "D")
// graph.addEdge("C", "E")
// graph.addEdge("E", "D")
// graph.addEdge("E", "F")
// graph.addEdge("F", "D")
// console.log("\n")
// graph.show()
// console.log("\n")
// console.log(dfsRecursive(graph, "A"))

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
console.log(dfsRecursive(graph, "qLimAxz"))
console.log("\n")