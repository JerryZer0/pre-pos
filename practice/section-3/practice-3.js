'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var num = new Array();
	for (var i = 0; i < collectionA.length;) {
		var count = 0;
		for (var j = i; j < collectionA.length; j++) {
			if (collectionA[i] === collectionA[j]) {
				count++;
			}
		}
		num.push({
			key: collectionA[i],
			count: count
		})
		i+=count;
	}
	var b = objectB.value.toString();
	for(var i=0;i<num.length;i++){
		if(b.indexOf(num[i].key.toString())>-1){
			num[i].count=num[i].count-(num[i].count-num[i].count%3)/3;
		}
	}
	return num;
}
