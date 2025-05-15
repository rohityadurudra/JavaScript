class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class stack {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value);

        if(this.length === 0){
            this.first = newNode;
        }

        newNode.next = this.first;
        this.first = newNode;
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0){
            return undefined;
        }
        let temp = this.first;
        //let ele = temp;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    }
    top() {
        if (this.length === 0) {
          return undefined;
        }
        return this.first;
      }
}

let mystack = new stack(0);
//mystack.first.value = 2;
mystack.push(5);
mystack.push(8);
mystack.push(76);

const popedele = mystack.pop();
console.log(mystack);
console.log(popedele);
console.log(mystack.pop());
