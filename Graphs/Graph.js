// UNDIRECTED GRAPH CLASS

class Graph {
    constructor() {
        this.list = {}
    }

    addVertex(v) {
        if(this.list[v]==undefined) {
            this.list[v] = []
        }
    }

    addEdge(v1, v2) {
        if(this.list[v1]!=undefined && this.list[v2]!=undefined) {
            this.list[v1].push(v2)
            this.list[v2].push(v1)
        }
    }

    removeEdge(v1, v2) {
        let i1 = this.list[v1].indexOf(v2)
        let i2 = this.list[v2].indexOf(v1)
        let l1 = this.list[v1]
        let l2 = this.list[v2]
        if(i1!=-1 && i2!=-1) {
            let temp = l1.splice(i1+1)
            l1.pop()
            this.list[v1] = l1.concat(temp)

            temp = l2.splice(i2+1)
            l2.pop()
            this.list[v2] = l2.concat(temp)
        }
    }

    removeVertex(v) {
        if(this.list[v]!=undefined) {
            for(let vertex of this.list[v]) {
                let index = this.list[vertex].indexOf(v)
                let temp = this.list[vertex].splice(index+1)
                this.list[vertex].pop()
                this.list[vertex] = this.list[vertex].concat(temp)
            }
            delete this.list[v]
        }
    }

    show() {
        console.log(this.list)
    }
}



// DIRECTED GRAPH CLASS

class DirectedGraph {
    constructor() {
        this.list = {}
    }

    addVertex(v) {
        if(this.list[v]==undefined) {
            this.list[v] = []
        }
    }

    addEdge(v1, v2) {
        if(this.list[v1]!=undefined && this.list[v2]!=undefined) {
            this.list[v1].push(v2)
        }
    }

    removeEdge(v1, v2) {
        let i1 = this.list[v1].indexOf(v2)
        let l1 = this.list[v1]
        if(i1!=-1) {
            let temp = l1.splice(i1+1)
            l1.pop()
            this.list[v1] = l1.concat(temp)
        }
    }

    removeVertex(v) {
        if(this.list[v]!=undefined) {
            for(let vertex of this.list[v]) {
                let index = this.list[vertex].indexOf(v)
                if(index!=-1) {
                    let temp = this.list[vertex].splice(index+1)
                    this.list[vertex].pop()
                    this.list[vertex] = this.list[vertex].concat(temp)
                }
            }
            delete this.list[v]
        }
    }

    show() {
        console.log(this.list)
    }
}



// UNDIRECTED WEIGHTED GRAPH
class UndirectedWeightedGraph {
    constructor() {
        this.list = {}
    }

    addVertex(v) {
        if(this.list[v]==undefined) {
            this.list[v] = []
        }
    }

    addEdge(v1, v2, w) {
        if(this.list[v1]!=undefined && this.list[v2]!=undefined) {
            this.list[v1].push({vertex: v2, weight: w})
            this.list[v2].push({vertex: v1, weight: w})
        }
    }

    removeEdge(v1, v2) {
        let l1 = this.list[v1]
        let l2 = this.list[v2]
        let i1 = -1
        let i2 = -1
        for(let i=0; i<l1.length; i++) {
            if(l1[i].vertex==v2) {
                i1 = i
                break
            }
        }
        for(let i=0; i<l2.length; i++) {
            if(l2[i].vertex==v1) {
                i2 = i
                break
            }
        }

        if(i1!=-1 && i2!=-1) {
            let temp = l1.splice(i1+1)
            l1.pop()
            this.list[v1] = l1.concat(temp)

            temp = l2.splice(i2+1)
            l2.pop()
            this.list[v2] = l2.concat(temp)
        }
    }

    removeVertex(v) {
        if(this.list[v]!=undefined) {
            for(let vert of this.list[v]) {
                let index = -1
                let l = this.list[vert.vertex]
                for(let i=0; i<l.length; i++) {
                    if(l[i].vertex==v) {
                        index = i
                        break
                    }
                }
                let temp = l.splice(index+1)
                l.pop()
                this.list[vert.vertex] = l.concat(temp)
            }
            delete this.list[v]
        }
    }

    show() {
        console.log(this.list)
    }
}



// DIRECTED WEIGHTED GRAPH       // LAST TWO METHODS NOT IMPLEMENTED YET
class DirectedWeightedGraph {
    constructor() {
        this.list = {}
    }

    addVertex(v) {
        if(this.list[v]==undefined) {
            this.list[v] = []
        }
    }

    addEdge(v1, v2, w) {
        if(this.list[v1]!=undefined && this.list[v2]!=undefined) {
            this.list[v1].push({vertex: v2, weight: w})
        }
    }

    removeEdge(v1, v2) {
        let l1 = this.list[v1]
        let i1 = -1
        for(let i=0; i<l1.length; i++) {
            if(l1[i].vertex==v2) {
                i1 = i
                break
            }
        }

        if(i1!=-1 && i2!=-1) {
            let temp = l1.splice(i1+1)
            l1.pop()
            this.list[v1] = l1.concat(temp)
        }
    }

    removeVertex(v) {
        if(this.list[v]!=undefined) {
            for(let vertex of Object.keys(this.list[v])) {
                if(vertex==v) {
                    continue
                }
                let index = -1
                for(let i=0; i<this.list[vertex].length; i++) {
                    if(this.list[vertex][i]==v) {
                        index = i
                        break
                    }
                }
                let temp = this.list.splice(index+1)
                this.list[vertex].pop()
                this.list[vertex] = this.list[vertex].concat(temp)
            }
            delete this.list[v]
        }
    }

    show() {
        console.log(this.list)
    }
}


module.exports.Graph = Graph
module.exports.DirectedGraph = DirectedGraph
module.exports.UndirectedWeightedGraph = UndirectedWeightedGraph
module.exports.DirectedWeightedGraph = DirectedWeightedGraph