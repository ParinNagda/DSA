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
            while(current.next && current.next != this.head) {
                current = current.next
            }
            current.next = node;
            this.head = current.next;
               
        }
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
ll.add(5);
ll.add(99);
ll.list();
 
 

console.log(ll.list());