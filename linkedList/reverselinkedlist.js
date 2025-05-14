class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    //add element at the end of the list
    push(value) {
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    //remove last element from the list
    pop(){
        let prev = this.head;
        let temp = this.head;

        if(!this.head){
            return undefined;
        }
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        while(temp.next){
            prev = temp;
            temp = prev.next;
        }
        
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        return temp;
    }
    //Add element at the begining of the linked list
    unshift(value){
        const newNode = new Node(value);

        //in case linked list is empty
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        // Is return this required here? And what does it do?
        // Now, your actual question:

        // No, return this is not strictly required for the method to function correctly.
        // ✅ Short Answer:
        
                           // But it's very useful for method chaining.
        // this refers to the current instance of the linked list object.
        // 🔍 What is return this doing?

        
        // By returning this, you're returning the linked list itself after the operation is done.
        // If you **do return this:
        // 📌 Example:
        
        // You can write code like this:
            // list.unshift(10).unshift(20).unshift(30);
        // This is called method chaining — where multiple operations are performed in one line on the same object.
        
        return this;
    }
    //remove first element from the list
    shift(){
        if(!this.head){
            console.log("list is Empty");
        }

        let temp = this.head;
        let val = temp.data;
        this.head = temp.next;

        temp.next = null;
        this.length--;

        return temp;
    }
    //reverse the whole linked list
    reverse(){
        let temp = this.head;
        let prev = null;
        let nex = this.head;
        while(this.head){
            // temp = this.head.next;
            nex = this.head.next;

            this.head.next = prev;
            prev = this.head;

            this.head = nex;
        }
        this.tail = temp;
        this.head = prev;
        return this;

    }
}

const myLinkedList = new LinkedList(6);
myLinkedList.push(10);
myLinkedList.push(98);
myLinkedList.push(4);
// myLinkedList.push(9);

console.log(myLinkedList.reverse());