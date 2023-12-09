class Array {
    constructor(arr) {
        this.arr = arr;
        this.length = arr.length;
    }

    display() {
        for (let index = 0; index < this.arr.length; index++) {
            const element = this.arr[index];
            console.log(element)
        }
    }

    ShiftingInsert(element, insertAt, capacity) {
        let size = this.arr.length - 1;
        if(size >= capacity) {
            return false;
        }
        for (let index = size; index >= insertAt; index--) {
            this.arr[index+1] = this.arr[index];
        }
        this.arr[insertAt] = element;
    }

    shiftingDelete(deleteAt, capacity) {
        let size = this.arr.length - 1;
        if(size >= capacity) {
            return false;
        }
        for (let index = deleteAt; index <= size; index++) {
            this.arr[index] = this.arr[index+1];
        }
    }

    linearSearch(element) {
        for (let index = 0; index < this.arr.length; index++) {
            if(this.arr[index] === element) {
                return index;
            }
        }
        return -1
    } 

    binarySearch(element) {
        let size = this.arr.length - 1;
        let low, middle, high;
        low = 0;
        high = size;
        while (low <=high) {
            middle = Math.floor((low + high) / 2);
            if(this.arr[middle] === element) {
                return index;
            }
            if(this.arr[middle] < element) {
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        } 
        return -1;
    }

}

let a = new Array([8,19,25,32,41]);
a.display();
