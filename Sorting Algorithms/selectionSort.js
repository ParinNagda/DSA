
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let temp;
        const element = array[i];
        let minIndex = i
        let j = minIndex + 1;

        for (j = j; j < array.length; j++) {
            if(array[j] <  array[minIndex]) {
                minIndex = j;
            }
        }
        
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        console.log(array)
    }    
}

selectionSort([4, 5, 3, 7, 2, 6])