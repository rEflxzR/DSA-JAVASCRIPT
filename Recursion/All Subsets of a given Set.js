// In JAVASCRIPT, Variables passed to functions are Passed by Value but if You change the Memeber
// Components of an Object, Then those changes will be Reflected in the Original Object

let res = {}

function subSet(level=0, subs=[]) {

    if(level==arr.length) {
        if(res[subs]==true) {
            return
        }
        res[subs] = true
        console.log(subs)
        return
    }

    subSet(level+1, subs)
    if(subs.indexOf(arr[level])==-1) {
        subs.push(arr[level])
    }
    else {
        return
    }

    subSet(level+1, subs)
    subs.pop()           
}

// let arr = [1,2,3,3]
let arr = [4, 6, 2, 8, 9, 5]

subSet()