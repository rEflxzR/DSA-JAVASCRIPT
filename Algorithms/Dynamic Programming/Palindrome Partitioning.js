function isPalindrome(str) {
    if(str.length==1) {
        return true
    }
    for(let i=0,j=str.length-1; i<j; i++, j--) {
        if(str[i]!=str[j]) {
            return false
        }
    }
    return true
}

function palindromePartitioning(str, index=1) {

    if(isPalindrome(str)) {
        return 0
    }
    if(index==str.length) {
        return Infinity
    }

    return Math.min(
        1+palindromePartitioning(str.slice(0, index))+palindromePartitioning(str.slice(index)),
        palindromePartitioning(str, index+1)
    )
}


function palindromePartitioning(str) {

    let n = str.length
    let table = [...Array(n)].map((e) => new Array(n))

    for(let i=0; i<n; i++) {
        table[0][i] = 1
    }


}

console.log(palindromePartitioning("geek"))
console.log(palindromePartitioning("abcde"))
console.log(palindromePartitioning("aaaaa"))
console.log(palindromePartitioning("abbac"))
console.log(palindromePartitioning("abbabbc"))