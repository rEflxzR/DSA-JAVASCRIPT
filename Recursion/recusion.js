console.log(`\nPROBLEM - 1`)
//--------------------------------------------- RECURSIVE FUNCTION 1
function numberPrint(num) {
    if(num <=0) {
        return;
    }

    console.log(num)
    numberPrint(num-1)
}

numberPrint(10)


console.log(`\nPROBLEM - 2`)
//------------------------------------------- RECURSIVE FUNCTION 2
function numberSum(num) {
    if(num==0) {
        return 0;
    }
    return num + numberSum(num-1)
}

console.log(numberSum(10))


console.log(`\nPROBLEM - 3`)
//------------------------------------------ RECURSIVE FUNCTION 3
function factorial(num) {
    if(num <=0){
        return 1;
    }

    return num * factorial(num-1)
}

console.log(factorial(5))


console.log(`\nPROBLEM - 4a`)
//----------------------------------------- RECURSIVE FUNCTION 4
//---------(HELPER METHOD) -------------------------- IN HELPER METHOD, WE USE A VARIABLE IN OUTER SCOPE AND DECALRE ANOTHER FUNCTION INSIDE FUNCTION. THE INNER FUNCTION IS RECURSIVELY CALLED. THE OUTER VARIBLE VARIABLE VALUE IS NOT AFFECTED DURING THE RECURSION

function collectOddValues(arr) {
    oddArr = []
    function oddValues(numarr) {

        if(numarr.length == 0){
            return
        }

        if(numarr[0]%2 != 0) {
            oddArr.push(numarr[0])
        }

        oddValues(numarr.slice(1))
    }
    oddValues(arr)

    return oddArr
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14]))


console.log(`\nPROBLEM - 4b`)
//---------(PURE RECURSION) --------------------------- IN PURE RECURSION, WE USAULLY DONT USE A DATA STRUCTURE TO STORE THE RESULTS, WE PERFORM THE CALCULATION AND CALL THE FUNCTION AGAIN IN THE RETURN STATEMENT ITSELF
function collectOddValues(arr) {
    if(arr.length == 0){
        return []
    }

    let oddArr = [];

    if(arr[0]%2 != 0){
        oddArr.push(arr[0])
    }

    return oddArr.concat(collectOddValues(arr.splice(1)))
}

console.log(collectOddValues([1,17,56,13,2,27,31,88,57,53,104]))

//-----------------------------------------------------------------------------------------------------------------------------