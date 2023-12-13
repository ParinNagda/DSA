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
        if(this.isEmpty()) {
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
            return false
        }
        let val = this.array[this.top]
        this.array.pop();
        this.top--;
        return val;
    }

    peek(position) {
        let index = this.top - position + 1;
        if(index < 0) {
            return 'Improper index'
        }
        return this.array[index];
    }

    checkParenthesis(expression){
        let openBrackets = ['[', '{', '('];
        let closeBrackets = [']', '}', ')'];
        let poppedCh
        for (let index = 0; index < expression.length; index++) {
            const element = expression[index];
            
            if(openBrackets.includes(element)) {
               console.log('top ' + this.top)
               this.push(element)
            }
            if(closeBrackets.includes(element)) {
               if(this.isEmpty()) {
                return 'Incorrect equation'
               }
               poppedCh = this.pop();
               if(!match(element, poppedCh)) {
                return 'Unbalanced'
               }
            }
        }
        
       if(this.top == -1){
           return 'Balanced'
       }
       
       return 'Unbalanced'
        
    }
    
    print() {
        console.log(this.array)
    }

    

}

function isOperator(element) {
    let operator = ['+', '-', '*', '/'];
    if(operator.includes(element)) {
        return true
    }
    return false;
}

function match(expression, pairOf) {
    if(expression == "(" && pairOf == ")") {
        return true
    }

    if(expression == "{" && pairOf == "}") {
        return true
    }

    if(expression == "[" && pairOf == "]") {
        return true
    }
    return false;
}

function precedence(operator) {
    let precedence;
    switch (operator) {
        case '+':
        case '-':
            precedence = 1;     
            break;
        case '*':
        case '/':
            precedence = 2;     
            break;
        default:
            break;
            
    }
    
    return precedence
}

function InfixToPostfix(expression) {
    let j = 0;
    let postFix = [];
    let postFixOperator = new Stack(1000)
    for (let i = 0; i < expression.length; i++) {
        const element = expression[i];
        if(!isOperator(element)) {
            postFix[j++] = element 
            // console.log(postFix)
        
        } else {
            if(postFixOperator.top == -1) {
                postFixOperator.push(element)
            } 
            else {
                console.log('element ' + precedence(element) + ' postfix ' + precedence(postFixOperator.stackTop()))
                while(precedence(element) > precedence(postFixOperator.stackTop())) {
                    let value = postFixOperator.pop();
                    // console.log(value)
                    postFix[j++] = value;
                }
               postFixOperator.push(element)
            }
        }
    }
    
    while(postFixOperator.top !== -1) {
        let val = postFixOperator.pop()
        console.log('postfix ' + val)
         console.log(postFixOperator.print())
        postFix[j++] = val;
        
    }
    
    return postFix
}

const s = new Stack(50);

console.log(InfixToPostfix("((a+b)*c)"))













