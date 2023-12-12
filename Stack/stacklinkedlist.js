class Node {
    constructor(item) {
        this.data = item;
        this.next = null;
    }
}

class StackLL {
    constructor() {
        this.top = null;
        this.length = 0
    }

    push(item) {
        const node = new Node(item)
        node.next = this.top
        this.top = node;
        this.length++;
    }
    
    pop() {
        if(!this.top) {
            return 'Stack is empty'
        }
        this.top = this.top.next
    }

    atStackTop() {
        if(!this.top) {
            return 'Stack is empty'
        }
        return this.top.data;
    }

    atStackBottom() {
        if(!this.top) {
            return 'Stack is empty'
        }
        let current = this.top;
        while(current.next) {
            current = current.next
        }
        return current.data;
    }
    
    list() {
        let current = this.top;
        var string = "";
        while(current) {
           string += current.data + " " 
           current = current.next;
        }
        return string
    }

    peek(index) {
        if(this.length < index) {
            return 'Index out of bound'
        }
        let i = 0
        let current;
        let ptr = this.top;
        while(i < index - 1) {
            i++
            ptr = ptr.next;
        }
        return ptr.data;
    }
}



const l = new StackLL();

l.push(2)
l.push(5)
l.push(66)
l.push(44)
l.pop()
console.log(l.peek(3))
console.log(l.atStackBottom())
// console.log(l.list())


l.push(6)