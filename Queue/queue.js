class Queue {
    constructor(size) {
        this.size = size;
        this.array = [];
        this.backIndex = -1;
        this.frontIndex = -1
    }

    enqueue(element) {
        if(!this.isFull()) {
            this.backIndex++;
            this.array[this.backIndex] = element;
            return element;
        }
        return false
    }

    dequeue() {
        if(this.isEmpty()) {
            return 'Queue is empty';
        }
        this.frontIndex++;
        let item = this.array[this.frontIndex];
        delete this.array[this.frontIndex];
        return item;
    }

    isEmpty() {
        if(this.frontIndex === this.backIndex) {
            return true;
        }
        return false;
    }

    isFull() {
        if (this.backIndex >= this.size - 1) {
            return true
        }
        return false;
    }

    
}

const q = new Queue(5);

q.enqueue(5)
q.enqueue(6)
q.dequeue()
q.dequeue()
q.enqueue(26)

console.log(q.array)