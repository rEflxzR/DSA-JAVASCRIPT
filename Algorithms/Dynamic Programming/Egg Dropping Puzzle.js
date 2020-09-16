function eggDropping(f, e) {

    let table = [...Array(f+1)].map((el) => new Array(e+1).fill(-1))

    for(let i=0; i<=e; i++) {
        table[0][i] = 0
        table[1][i] = 1
    }
    for(let i=2; i<=f; i++) {
        table[i][1] = i 
    }

    for(let i=2; i<=f; i++) {
        for(let j=2; j<=e; j++) {
            table[i][j] = Infinity
            for(let x=1; x<=i; x++) {
                table[i][j] = Math.min(table[i][j], 1+Math.max(table[x-1][j-1], table[i-x][j]))
            }
        }
    }

    return table[f][e]
}

console.log(eggDropping(10, 2))
console.log(eggDropping(36, 2))
console.log(eggDropping(100, 2))