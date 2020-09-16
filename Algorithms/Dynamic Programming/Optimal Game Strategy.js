function optimalStrategy(coins, sindex=0, eindex=coins.length-1) {

    if(sindex+1==eindex) {
        return Math.max(coins[sindex], coins[eindex])
    }

    return Math.max(
        coins[sindex] + Math.min(optimalStrategy(coins, sindex+1, eindex-1), optimalStrategy(coins, sindex+2, eindex)),
        coins[eindex] + Math.min(optimalStrategy(coins, sindex, eindex-2), optimalStrategy(coins, sindex+1, eindex-1))
    )
}


console.log(optimalStrategy([20, 5, 4, 6]))   // 25
console.log(optimalStrategy([20, 5, 6, 4]))   // 26
console.log(optimalStrategy([7, 3, 15, 2]))   // 22
console.log(optimalStrategy([7, 15, 3, 2]))   // 17
console.log(optimalStrategy([2, 15, 3, 7]))   // 22
console.log(optimalStrategy([2, 3, 15, 7]))   // 17