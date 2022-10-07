/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callbackFn(this[i], i, this));
    }
    return resultArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    resultArray = []; 
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])) 
            resultArray.push(this[i]);
    }
    return filtered;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        if (callbackFn(this[i], i, this) === false) return false;
    }
    return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    if(this[i]==null)continue;
    result = callbackFn(result, this[i], i, this)
  } 
  return result;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for(let i = 0; i< this.length; i++){
    if(this[i]===searchElement){
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === searchElement) {
            return i;
        }
    }
    return -1;
};
// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] === searchElement) {
            return i;
        }
    }
    return -1;
};

//Object Keys 
Object.myKeys = function(object) {
    // Place your code here.
    let output = [];
    for (n in object) {
        output.push(n)
    }

    return output;
};

//object value
Object.myValues = function(object) {
    let output = [];
    for (n in object) {
        output.push(n)
    }
    return output

}
