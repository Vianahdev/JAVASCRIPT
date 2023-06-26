const c_list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function binarySearch(array, item, begin, end){

    if( end >= begin){
        const indice = parseInt(begin + (end-begin)/2);

        if(array[indice] === item){
            return item;
        }

        if(array[indice] > item){
            return binarySearch(array, item, begin, indice-1);
        }

        return binarySearch(array, item, indice+1, end);
    }
    return -1;
}

console.log("SEU VALOR E:",binarySearch(c_list, 20, 0, c_list.length-1));
