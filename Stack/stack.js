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

    stackTop() {
        if(this.isEmpty) {
            return 'Stack is empty'
        }
        return this.array[this.top]
    }

    stackBottom() {
        if(this.isEmpty) {
            return 'Stack is empty'
        }
        return this.array[0]
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

    checkParenthesis(expression){
        for (let index = 0; index < expression.length; index++) {
            const element = expression[index];
            
            if(element === "(") {
               console.log('top ' + this.top)
               this.push(element)
            }
            if(element === ")") {
               if(this.isEmpty()) {
                return 'Incorrect equation'
               }
               this.pop()
            }
        }
        
       if(this.top == -1){
           return 'Balanced'
       }
       
       return 'Unbalanced'
        
    }
    
    print() {
        console.log(this.array[0])
    }
}

const s = new Stack(50);

console.log(s.checkParenthesis("(a * b + c / d))("))













