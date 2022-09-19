// function without name ---> anonymous function 
// what is closure ? values inside the function is not lost

// example 1--------------- returning 1 function in form of object
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

// example 2--------------- returning 2 functions in form of object

function sum1(a, b, c) {
    return {
        getSumTwo:function () {
            return a*b
        },
        getSumThree:function () {
            return a*b*c
        }
    }
  
}

let store = sum1(2, 3, 4)
// even after returning the function , the values of a b and c are retained and are used in function getSumTwo and getSumThree, this is lexical scoping and closure
console.log(store.getSumTwo())
console.log(store.getSumThree())
