let {Stack} = require('./Stack.js')

/*
    APPROACH - Maintain the latest open brace at some place, When a closed brace is encountered, check if it
               is in paring with last open brace or not. When make sure Opening and closing braces are same in numbers
*/

function balancedParenthesis(str) {
    let open = ['(', '{', '[']
    let close = [')', '}', ']']
    let stack = new Stack()

    for(let char of str) {
        if(stack.isEmpty() && close.includes(char)) {
            return false
        }

        if(open.includes(char)) {
            stack.push(char)
        }
        if(close.includes(char)) {
            if(open.indexOf(stack.top())==close.indexOf(char)) {
                stack.pop()
            }
            else {
                return false
            }
        }
    }

    if(stack.isEmpty()) {
        return true
    }
    return false
}


console.log(balancedParenthesis('{}[()]'))
console.log(balancedParenthesis('((())'))
console.log(balancedParenthesis('[{]}'))
console.log(balancedParenthesis('[{({}[{}()])}]'))