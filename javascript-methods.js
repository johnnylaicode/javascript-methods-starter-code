// MAP //
Array.prototype.myMap = function(callbackFn) {
  let result = [];
  for(let i =0; i < this.length; i++){
      result.push(callbackFn(this[i],i,this));
  }
  return result;

};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let result = [];
  for(let i =0; i < this.length; i++){
      if(callbackFn(this[i],i,this) === true){
        result.push(this[i])
      }
  }
  return result;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for(let i =0; i < this.length; i++){
    if(callbackFn(this[i],i,this)){
        return true
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for(let i =0; i < this.length; i++){
    if(!callbackFn(this[i],i,this)){
        return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn,initialValue=0) {
  let result = initialValue;
  let i = 0;
  let previousValue = result;
  if(i === 0 && initialValue){
    result = callbackFn(initialValue,this[i],i,this);
    previousValue = result;
    i += 1;
  }else {
    result = callbackFn(previousValue,this[i],i,this); 
    i += 1;
  }

  while (i < this.length){
  
    previousValue = result;
    result = callbackFn(previousValue,this[i],i,this);
    i += 1
    
  }
  return result;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};

const array1 = [4, 4, 4, 4];
const array2 = [4,4,4,4];
// should be 16
const initialValue = 0;
const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue * currentValue,10);
const myTest = array2.myReduce((previousValue, currentValue) => previousValue * currentValue,10);

console.log(sumWithInitial);
console.log(myTest);