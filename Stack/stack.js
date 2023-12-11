class Stack {
    constructor(size) {
        this.size = size
        this.top = -1; 
        this.array = new Array(this.size);
    }

    isEmpty() {
        if(this.top == -1) {
            return true;
        }

        return false;
    }

    isFull() {
       if(this.top == this.size - 1) {
            return true;
       } 
       
       return false
       
    }

    push (val) {
        
        if(this.isFull()) {
            return 'Stack overflow'
        }
        this.top++;
        this.array[this.top] = val;
        
    }

    pop() {
        if(this.isEmpty()) {
            return 'Stack is empty'
        }
        this.top--;
        this.array.pop();
    }

    peek(position) {
        let index = this.top - position + 1;
        if(index < 0) {
            return 'Improper index'
        }
        return this.array[index];
    }
    
    print() {
        console.log(this.array[0])
    }
}

const s = new Stack(50);
s.push(5);
s.push(8)
s.push(514)
s.push(54)
s.push(56)
s.pop()
s.push(45)
s.push(96)
s.push(736)
console.log(s.peek(5))













