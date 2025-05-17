const reversestring = (str) => {
    const stack = [];
    
    for(let char of str) {
        stack.push(char);
    }

    let reversedstr = "";
    while(stack.length > 0){
        reversedstr += stack.pop()
    }
    return reversedstr;
}
console.log(reversestring("hello world"));