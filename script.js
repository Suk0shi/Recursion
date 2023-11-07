function fibsRecursion(n) {
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    return [...fibsRecursion(n-1), fibsRecursion(n-1)[n-2]
     + fibsRecursion(n-1)[n-3]
    ];
}

function fibsIteration(n) {
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    const list = [0, 1, 1];
    let first = 1;
    let second = 1;
    
    for (let i = 0; i <= n-4; i++) {
        let presentNumber = first + second;
        list.push(presentNumber);
        first = second;
        second = presentNumber;
    }
    return list;
}


function mergeSort(array) {
    if (array.length === 1) return array;
    if (array.length > 1) {
        //start merging process
        const mid = Math.floor(array.length / 2);
        //make new array betweeen array[1], array[mid] called firstHalf
        const firstHalf = array.slice(0, mid);
        //make new array betweeen array[mid+1], array[array.length] called secondHalf
        const secondHalf = array.slice(mid, array.length);
        
        //reorder the two halves
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    //do splitting process
}

function merge(firstHalf, secondHalf) {
    const result = [];
    let i = 0;
    let j = 0;
    while(i < firstHalf.length && j < secondHalf.length) {
        if(firstHalf[i] < secondHalf[j]) {
            result.push(firstHalf[i]);
			i++;
        }
        else {
            result.push(secondHalf[j]);
			j++;
        }
    }
    while (i < firstHalf.length) {
        result.push(firstHalf[i])
        i++;
    }
    while (j < secondHalf.length) {
        result.push(secondHalf[j])
        j++;
    }
    return result;
}