const {performance} = require('perf_hooks');
/**
 * @param str1, str2, [.., .., strN] = str1, str2, ...strN
 * Якщо передане значення не може бути конвертоване у чисто то буде 0
 * return string.
 */
// str.concat(str1, str2, [.., .., strN])

console.log('Hello'.concat(' ', 'WORD', '!')); // Hello WORD!
console.log('Hello'.concat(' ', true, '!')); // Hello true!!
console.log('Hello'.concat(' ', false, '!')); // Hello false!
console.log('Hello'.concat(' ', null, '!')); // Hello null!
console.log('Hello'.concat(' ', undefined, '!')); // Hello undefined!

let time0  = performance.now();
console.log('Hello'.concat(' ', 1234567890, '!')); // Hello 1234567890!
let time1  = performance.now();
console.log('performance ' + ' ' + (time1 - time0));


// !!!!!!!!!!! Звачайний конкат(+) швидший!!!!!!!!!!!!!!

time0  = performance.now();
console.log('Hello' + ' ' + 1234567890 + '!'); // Hello 1234567890!
time1  = performance.now();
console.log('performance ' + ' ' + (time1 - time0));

