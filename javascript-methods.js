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
  // checks if element is in array
  for(let element of this){
    if(element === searchElement){
      return true
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for(let i =0;i < this.length;i++){
    if(this[i] === searchElement){
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for(let i = this.length-1;i>-1;i--){
    if(this[i] === searchElement){
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};
