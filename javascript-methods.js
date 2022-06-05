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
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
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