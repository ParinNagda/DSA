class Node {
    constructor(item) {
        this.data = item;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(item) {
        const node = new Node(item);
        let current;
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next && current.next != this.head) {
                current = current.next
            }
            current.next = node;
           
        }
        this.length++;
    }

    addAtFirst(item) {
         const node = new Node(item);
        let current;
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            console.log(current)
            while(current.next && current.next != this.head) {
                current = current.next
            }
            current.next = node;
            node.next = this.head;
           this.head = node;
        }
        this.length++;
    }
    
    addAtLast(item) {
         const node = new Node(item);
        let current;
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            console.log(current)
            while(current.next && current.next != this.head) {
                current = current.next
            }
            current.next = node;
            node.next = this.head;
        }
        this.length++;
    }

    list() {
        let string = "";
        if(this.head) {
            let current = this.head;
            let string = current.data + " "
            do {
                current = current.next;
                string += current.data + " "
            }
            while(current.next && current.next != this.head)   
            return string
        } else {
            return 'Empty'
        }
        
    }
}


let ll = new CircularLinkedList();
 
ll.add(2);
ll.addAtLast(5);
ll.addAtFirst(99);
ll.addAtFirst(25);
ll.list();
 
 

console.log(ll.list());