function mezclar(...arrays) {
    return [].concat(...arrays);
}

console.log(mezclar([1, 2], [3], [4, 5])); 

console.log(mezclar(['a', 'b'], ['c'])); 

console.log(mezclar([1], [2, 3], [4, 5, 6])); 