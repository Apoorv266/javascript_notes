// function without name ---> anonymous function 
// what is closure ? values inside the function is not lost
function sum(a) {

    console.log("Live Viewers " + a)

    let c = 5
    // below function is function without name hence it is anonymous function
    // sum function is returning an anonymous function 
    return function (b) {
        // the values of a and c will be restored even after calling function again , this is called lexical scoping
        return a * b * c
    }
}


let returnFunc = sum(2)
console.log(returnFunc(3))
