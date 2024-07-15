//Implementation of collection-processing methods

//Checks if collection is an array or object, converting objects into an array.

const convertToArray = (collection) => Array.isArray(collection) ? collection : Object.values(collection);

function myEach(collection, cb){
    const convertedArr = convertToArray(collection);

    for(let i = 0; i < convertedArr.length; i++ ){
        cb(convertedArr[i]);
    }
    return collection;
}

function myMap(collection, cb){
    const convertedArr = convertToArray(collection);

    const newArr = []

    for(let i = 0; i < convertedArr.length; i++){
        newArr.push(cb(convertedArr[i]))
    }

    return newArr;
}

function myReduce(collection, cb, accum){
    let convertedArr = convertToArray(collection);

    if(!accum){
        accum = convertedArr[0];
        convertedArr = convertedArr.slice(1);
    }

    for(let i = 0; i < convertedArr.length; i++){
        accum = cb(accum, convertedArr[i], convertedArr)
    }

    return accum;
}

function myFind(collection, predicate){
    const convertedArr = convertToArray(collection);

    for(let i = 0; i < convertedArr.length; i++){
        if(predicate(convertedArr[i])){
            return convertedArr[i];
        }
    }

}

function myFilter(collection, predicate){
    const convertedArr = convertToArray(collection);

    const newArr = [];

    for(let i = 0; i < convertedArr.length; i++){
        if(predicate(convertedArr[i])){
            newArr.push(convertedArr[i]);
        }
    }

    return newArr;

}

function mySize(collection){
    const convertedArr = convertToArray(collection);

    return convertedArr.length;
}

function myFirst(arr, n = 0){
    return (n)? arr.slice(0,n) : arr[0];
}

function myLast(arr, n){
    return (n)? arr.slice(arr.length-n,arr.length) : arr[arr.length-1]
}

function mySortBy(arr, cb){
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
       if (cb(a) > cb(b)) {
            // If cb(a) is greater than cb(b), a should come after b
            return 1;
        } else if (cb(b) > cb(a)) {
            // If cb(b) is greater than cb(a), b should come after a
            return -1;
        } else {
            return 0;
        }
    });
}

function myFlatten(arr, shallow, newArr = []){
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && !shallow) {
            myFlatten(arr[i], false, newArr); // Recursively flatten nested arrays
        } else {
            newArr.push(arr[i]); // Add non-array elements to newArr
        }
    }

    return newArr;   
}

function myKeys(obj){
    const keys = [];

    for(let key in obj){
        keys.push(key)
    }

    return keys;
}

function myValues(obj){
    const values = [];

    for(let key in obj){
        values.push(obj[key])
    }

    return values;
}