function bubbleSort(array) {
    let isSorted = 1;
    for(let i=0; i<array.length - 1; i++) {
        for(let j=0; j<array.length - 1 - i; j++) {
            if(array[j] > array[j+1]) {
                isSorted = 0;
                let temp;
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp; 
            }
        }
        if(isSorted) {
            return array
        }
    }
     return array
   
    
}

console.log(bubbleSort([2, 4, 9, 11, 17,7]))

//2, 4, 7, 9, 11, 17

