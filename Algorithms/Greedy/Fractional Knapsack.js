/*
    1. TO GET THE MAXIMUM VALUE FOR A GIVE SACK SIZE, ARRANGE THE GIVEN ITEMS IN DECREASING ORDER OF ITEM VALUE PER KG
    2. TAKE EACH ITEM FULLY IN THE KNAPSACK AS LONG AS YOU CAN
    3. WHEN YOU CANT TAKE FULL ITEM WEIGHT, TAKE FRACTION OF IT AND ADD ITS COST ACCORDINGLY
*/

function fractionalKnapsack(array, capacity) {
    array.sort((a, b) => {
        return (b[1]/b[0])-(a[1]/a[0])
    })

    let current_capacity = capacity
    let result = 0

    for(let item of array) {
        if(current_capacity >= item[0]) {
            result = result + item[1]
            current_capacity = current_capacity - item[0]
        }
        else {
            result = result + (item[1]/item[0])*current_capacity
            current_capacity = 0
            break
        }
    }

    return result
}

console.log(fractionalKnapsack([[50, 600], [20, 500], [30, 400]], 70))
console.log(fractionalKnapsack([[10, 200], [5, 50], [20, 100]], 15))