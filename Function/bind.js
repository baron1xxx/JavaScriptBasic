const obj = {
    x: 42,
    getX: function() {
        console.log(this);
        return this.x;
    }
};

// function f() {
//     // console.log(this);
//     return this.x;
// }
//
// f();

const unboundGetX = obj.getX;
// console.log(unboundGetX.toString()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(obj);
console.log(boundGetX());
// expected output: 42
