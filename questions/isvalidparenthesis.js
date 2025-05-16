//check is sequence of parenthesis in the given string is valid or not


const isvalidparentthesis = (str) => {
    const stack = [];

    const bracket = {
        "(":")",
        "{":"}",
        "[":"]"
    };

    for(let char of str){
        if(bracket[char]){
            stack.push(char);
        }
        else if(Object.values(bracket).includes(char)){
            let last = stack.pop();
            if(bracket[last] !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isvalidparentthesis("(){}[]"));  //true
console.log(isvalidparentthesis("(}([]"));  //false
console.log(isvalidparentthesis("[({})]")); //true
console.log(isvalidparentthesis("()}[]"));  //false
console.log(isvalidparentthesis("{[()]}")); // true
console.log(isvalidparentthesis("{[(])}")); // false
console.log(isvalidparentthesis("{[}"));    //false

