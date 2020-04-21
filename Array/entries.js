/**
 * return array iterator (next())
 */

// array.entries()
 let arr1 = [1, 2, '10', {name: 'Roman'}, 'Hello', [8, 121]];
 const entries = arr1.entries();
for (let e of entries) {
     console.log(e);
 }
/*
_[key, value]_______________
[ 0, 1 ]
[ 1, 2 ]
[ 2, '10' ]
[ 3, { name: 'Roman' } ]
[ 4, 'Hello' ]
[ 5, [ 8, 121 ] ]
 */
