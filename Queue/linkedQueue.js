class Node {
    constructor(item) {
        this.data = item
        this.next = null;
    }
    
}

class QueueLinked {
    constructor(size) {
        this.size = size;
        this.length = 0;
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        if(this.front === null) {
            return true;
        } 
        return false;
    }

    isFull() {
        if(this.length >= this.size) {
            return true;
        }
        return false;
    }

    enqueue(element) {
        if(this.isFull()) {
            return 'Queue is full' 
        }  
        const node = new Node(element);
        let value;
        this.length++;
        if (this.isEmpty()) {
            this.front = this.rear = node;
        } else {
            let current = this.front;
            this.rear.next = node;
            this.rear = node;
        }
        
        
    }
    
    dequeue() {
        if(this.length == 0) {
            return 'Queue is empty'
        }
        let val = this.front.data;
        this.front = this.front.next;
        return val;
    }
    
    list() {
        let current = this.front;
        var string = "";
        while(current) {
           string += current.data + " " 
           current = current.next;
        }
        return string
    }
}

const l = new QueueLinked(5);
l.enqueue(3)
l.enqueue(4)
l.enqueue(2)
l.enqueue(6)
console.log(l.enqueue(4))
console.log(l.dequeue())
console.log(l.list())



l.enqueue(74)
