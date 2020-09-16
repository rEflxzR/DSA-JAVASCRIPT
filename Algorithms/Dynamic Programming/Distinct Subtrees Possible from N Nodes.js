function distinctTrees(num) {

    let table = new Array(num+1).fill(1)

    for(let i=1; i<=num; i++) {
        let val = 0
        for(let j=0, k=i-1; j<i && k>=0; j++, k--) {
            val = val + table[j]*table[k]
        }
        table[i] = val
    }

    return table[num]
}

console.log(distinctTrees(3))
console.log(distinctTrees(4))
console.log(distinctTrees(5))
console.log(distinctTrees(6))