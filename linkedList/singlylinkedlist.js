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
    //get first node of the list
    getFirst(){
        if(!this.head){
            return undefined;
        }
        return this.head;
    }
    //get last node of the list
    getLast(){
        if(!this.head){
            return undefined;
        }
        //return this.tail;
        //using while loop;
        let ptr = this.head;
        while(ptr){
            if(!ptr.next){
                return ptr;
            }
            ptr = ptr.next;
        }

    }
    //get element at any position/index
    getatIndex(index){
        let temp = this.head;
        let counter = 0;

        while(temp){
            if(counter === index){
                return temp;
            }
            counter++;
            temp = temp.next;  
        }
    }
    //set element at any position
    set(index,value){
        let temp = this.getatIndex(index);

        if(temp){
            temp.value = value;
            return true;
        }

        return false;
    }
    //insert element at any position in the linked list
    insert(index, data){

        if (index < 0 || index > this.length) return false;

        if(index === 0){
            return this.unshift(data);
        }
        if(index === this.length){
            return this.push(data);
        }

        const temp = this.getatIndex(index-1);
        const newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode;

        this.length++;
        return true;
    }
    //remove all element from the list
    clear(){
       this.head = null;
    }

}

const myLinkedList = new LinkedList(6);
myLinkedList.push(10);
myLinkedList.push(98);
// myLinkedList.push(4);
// myLinkedList.push(9);

//console.log(myLinkedList.clear());

// myLinkedList.insert(1,5)
// console.log(myLinkedList);

//console.log(myLinkedList.getFirst());

//console.log(myLinkedList.getLast());

// console.log(myLinkedList.getatIndex(1));

// console.log(myLinkedList.set(1,5));
// console.log(myLinkedList);

// console.log("Before poping: ", myLinkedList);
// myLinkedList.pop();
//myLinkedList.unshift(76);
// console.log("Before shift method: ", myLinkedList);
// const element = myLinkedList.shift();
// console.log("After shift method: ", myLinkedList);
// console.log("removed element: ", element);