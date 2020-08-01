function linearSearch(arr, item) {
    for(let el of arr) {
        if(el == item) {
            return `${item} is Present in the List`
        }
    }
    return `${item} is NOT Present in the List`
}

console.log(linearSearch([34,65,23,876,91,400,625, "ReflxzR", 783], "ReflxzR"))
console.log(linearSearch([34,65,23,876,91,400,625, "ReflxzR", 783], 911))