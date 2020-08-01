console.log(`\nRECURSION PROBLEM SET-1\n\nPOWER PROBLEM ->`)
//-------------------------------------------------------------------------------------------
function power(num, pow) {
    if(pow==0) {
        return 1
    }

    return num * power(num, pow-1)
}

console.log(power(6,4))

console.log(`\nPRODUCT OF ARRAY ->`)
//--------------------------------------------------------------------------------------------
// -------- (PURE RECURSION)
function productArrayPure(arr) {
    if(arr.length==0){
        return 1
    }

    return arr[0]*productArrayPure(arr.splice(1))
}

console.log(productArrayPure([3,9,3]))

// ----------(HELPER METHOD)
function productArrayHelper(arr) {
    let product = 1

    function helper(myarr) {
        if(myarr.length==0) {
            return 1
        }

        product = product*myarr[0]
        helper(myarr.splice(1))
    }

    helper(arr)
    return product
}

console.log(productArrayHelper([1,2,3,4,5]))

console.log(`\nFIBONACCI PROBLEM ->`)
//---------------------------------------------------------------------------------------------------
function fibonacci(n) {
    if(n==0) {
        return 0
    }
    if (n==1) {
        return 1
    }

    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(8))

console.log(`\nPALINDROME ->`)
//-----------------------------------------------------------------------------------------------------
function palindrome(str, high=str.length-1, low=0) {
    if(str[low] != str[high]){
        return `Not Palindrome`
    }

    if(high < low){
        return "Palindrom"
    }
    // console.log(high, low)

    return palindrome(str, high-1, low+1)    
}

console.log(palindrome("ReflxzR"))

console.log(`\nSTRING REVERSAL ->`)
//-----------------------------------------------------------------------------------------------------------------
function stringReverse(str) {
    if(str.length==0) {
        return ""
    }

    end = str.length-1

    return `${str[end]}` + stringReverse(str.substr(0, end))
}

console.log(stringReverse("ReflxzR"))
console.log(stringReverse("jAnzWE"))
console.log(stringReverse("qLimAxz"))

console.log("\nSTRINGIFIED NUMBERS")
//-----------------------------------------------------------------------------------------------------------------
function numberStrings(str) {
    if(str.length == 0) {
        return 0
    }

    if(isNaN(str[0])) {
        return 0 + numberStrings(str.slice(1))
    }
    else {
        return parseInt(str[0]) + numberStrings(str.slice(1))
    }
}

console.log(numberStrings("Re4fl6xz5R"))