class CircularQueue {
    constructor(size) {
        this.size = size;
        this.array = [];
        this.backIndex = -1;
        this.length = 0;
        this.frontIndex = 0
    }

    enqueue(element) {
        if(!this.isFull()) {
            this.backIndex++;
             this.length++;
            this.array[this.backIndex % this.size] = element;
            return element;
        }
        return false
    }

    dequeue() {
        if(this.isEmpty()) {
            return 'Queue is empty';
        }
        const value = this.element[this.front % this.size];
        delete this.element[this.front % this.size];
        this.frontIndex++;
        this.length--
        return value;
    }

    isEmpty() {
        return (this.length == 0);
    }

    isFull() {
        if(this.length >= this.size) {
            return true
        }

        return false;
    }

    
}

const q = new CircularQueue(5);

q.enqueue(5)
q.enqueue(5)
q.enqueue(6)
console.log(q.enqueue(6))
console.log(q.enqueue(6))



