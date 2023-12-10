class Node {
    constructor(item) {
        this.data = item;
        this.next = null;
    }
}

class LinkedList {
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
            while(current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.length++;
    }

    addAtFirst(item) {
        const node = new Node(item);
        node.next = this.head;
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
        current.next = node;
        this.length++;
    }

    addAtIndex(item, index) {
        if (index && index <= this.length) {
            const node = new Node(item);
            let i = 0;
            let current = this.head;
            while (i!= index-1) {
                i++;
                current = current.next;
            }
             
            let next = current.next;
            node.next = current.next;
            current.next = node;
            node.next = next;
            this.length++;
        } else {
            return 'Index out of bounds'
        }
        
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

    deleteFirst() {
        if(this.head) {
            this.head = this.head.next;
        }
        return 'No Nodes Present'     
    }

    deleteLast() {
        let current, prev;
        if(this.head) {
           current = this.head; 
        } 
        while(current.next) {
            prev = current;
            current = current.next;
        }
        prev.next=null;
    }

    deleteAtIndex(index) {
        let i = 0
        let current, prev;
        if(this.head) {
            current = this.head;
        } else {
            return 'No data exist'
        }
        if(index && index <= this.length) {
            while(i != index) {
                i++;
                prev = current;
                current = current.next;
            }
                prev.next = current.next
            
        }
        
    }

}

 let ll = new LinkedList();
 
 ll.add(2);
 ll.add(5);
 ll.addAtLast(9)
 ll.addAtFirst(6)
 ll.addAtLast(23);
 ll.add(5)
 ll.add(13)
 ll.addAtIndex(62,3) 
 ll.deleteFirst()
 ll.deleteAtIndex(3);
 ll.deleteLast()
 console.log(ll.list());
 
 
 
 
 


