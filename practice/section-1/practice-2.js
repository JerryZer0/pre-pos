'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
  var b=collectionB.toString();
  for(var i=0;i<collectionA.length;i++){
    if(b.indexOf(collectionA[i].toString())>-1)
      result.push(collectionA[i]);
  }
  return result;
}
