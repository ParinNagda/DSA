class Node {
    constructor(item) {
        this.data = item;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    list() {
        let current = this.head;
        var string = "";
        while(current) {
           string += current.data + " " 
           current = current.next;
        }
        return string   
    }
    
    listReverse() {
        let current = this.head;
        var string = "";
        while(current.next) {
           current = current.next;
        }
        string = current.data + " "
        while(current.prev) {
            current = current.prev;
            string += current.data + " "
            console.log(current.data)
        }
        
        return string
    } 

    add(item) {
        const node = new Node(item);
        let current;
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next
            }
            node.prev = current; 
            current.next = node;
        }
        this.length++;
    }
    
    addAtFirst(item) {
        const node = new Node(item);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
        return node.data;
    }
    
    addAtLast(item) {
        const node = new Node(item);
        if(!this.head) {
            this.head = node;
        }   
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        node.prev = current;
        current.next = node;
        
        this.length++;
    }
    
    addAtIndex(item, index) {
        if (index && index <= this.length) {
            const node = new Node(item);
            let i = 0;
            let prev;
            let current = this.head;
            while (i!= index-1) {
                i++;
                current = current.next;
            }
            prev = current
            node.prev = prev
            current = current.next
            prev.next = node;
            node.next = current
            current.prev = node
            this.length++;
        } else {
            return 'Index out of bounds'
        }    
    }
}

let ll = new DoubleLinkedList();
 
ll.add(2);
ll.add(33);
ll.add(57);
ll.addAtLast(5);
ll.addAtIndex(18,3)
ll.add(19);
// ll.addAtIndex(21,3)
// ll.addAtFirst(8);
// ll.addAtIndex(178,1)
console.log(ll.list());

console.log(ll.listReverse());



