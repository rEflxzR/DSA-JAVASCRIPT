/*
    A HASH TABLE IS A DATA STRUCTURE USED TO STORE DATA TO EFFICIENT RETRIEVAL
    BASCIALLY WE CANNOT ACCESS DATA IN AN ARRAY USING STRINGS AS A KEY
    HASHMAP ALLOWS US TO DO THAT
    USING A HASH FUNCTION, FIND OUT A SUITABLE INDEX VALUE FOR THE KEY IN THE ARRAY
    TO GET THE DATA CORRESPONDING TO THE KEY, WE AGAIN FIND OUT THE INDEX USING THE HASH FUNCTION

    CHARACTERISTICS OF A GOOD HASH FUNCTION - 
        1) IT SHOULD PERFORM FASTER
        2) IT SHOULD ALWAYS YEILD THE SAME RESULT FOR A PARTICULAR INPUT
        3) SHOULD NOT CLUTTER MORE DATA AT THE SAME POSITION
*/

// A SIMPLE HASH FUNCTION WHERE key IS A STRING OF ARBITRARY LENGTH AND s IS THE ARRAYS SIZE

// function hash(key, s) {
//     let total = 0
//     for(let word of key) {
//         total += (word.charCodeAt(0))
//         total = total%s
//     }
//     return total
// }


// AN IMPROVED VERSION USING PRIME NUMBERS

function hash(key, s) {
    let total = 0
    let prime = 67
    for(let i=0; i<Math.min(key.length, 100); i++) {
        total = (total*prime)+key[i].charCodeAt(0)
        total = total%s
    }

    return total
}

console.log(hash("ReflxzR", 67))
console.log(hash("qLimAxz", 13))
console.log(hash("rEplan", 67))
console.log(hash("jAnzWE", 67))