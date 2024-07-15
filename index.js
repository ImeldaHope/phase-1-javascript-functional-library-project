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

}

function myFlatten(arr, shallow, newArr = []){

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