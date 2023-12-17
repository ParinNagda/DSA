function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        let j = i - 1;
        while(j>=0 && (array[j] > element)) {
            array[j+1] = array[j];
            j--
        }
         
      array[j+1] = element;
      console.log(array)
    }
    return array
}



let arr = [4, 5, 3, 7, 2, 6];
console.log(insertionSort(arr));
