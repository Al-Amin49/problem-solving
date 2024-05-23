/**
 Task: Function Composition
Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
 */

function squarNumber(num){
    return num*num;
}

function doubleNumber(num){
    return num*2;
}

function Add5(num){
    return num+5;
}

function squareNumDoubleNumAdd5(num) {
    const squared = squarNumber(num);
    const doubled = doubleNumber(squared);
    return Add5(doubled);
}
console.log(squareNumDoubleNumAdd5(5))