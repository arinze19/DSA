var insert = function(array: number[], rightIndex: number, value: number) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};

var insertionSort = function(array: number[]) {
   for(var i = 0; i < array.length - 1; i++){
       insert(array, i, array[i + 1])
   }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);

console.log(array)