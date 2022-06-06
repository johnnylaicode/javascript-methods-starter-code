
// myIncludes test
const includes_array = [1, 4, 3];
console.log(includes_array.includes(2));
console.log(includes_array.myIncludes(2));

//My reduce test
const array1 = [4, 4, 4, 4];
const array2 = [4,4,4,4];


const initialValue = 0;
const sum = array1.reduce((previousValue, currentValue) => previousValue * currentValue,10);
const myTest = array2.myReduce((previousValue, currentValue) => previousValue * currentValue,10);

console.log(sum);
console.log(myTest);