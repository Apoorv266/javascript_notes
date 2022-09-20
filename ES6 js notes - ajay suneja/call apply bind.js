let useDetails = {
    name : "Apoorv", 
    age : "22", 
    printDetails :function () {
        console.log(this.name)
    }
}

useDetails.printDetails()

let useDetails2 = {
    name : "Sharma", 
    age : "25", 
}
// with the help of call we can burrow function of different object 
// with the help of call we can make the function generic and bing object ot it
useDetails.printDetails.call(useDetails2)

//-----------------------

// making function generic 

let printAge = function (state) {
    console.log(this.age + " " + state)
}

// call
// passing parameter to function using call
printAge.call(useDetails, "Delhi")
printAge.call(useDetails2, "Mumbai")

// Apply
// passing parameter to function using apply
printAge.apply(useDetails, ["Delhi"])
printAge.apply(useDetails2, ["Mumbai"])

// bind
// we create a copy of call function and just store it in variable and use that variable instead
let newFunc = printAge.bind(useDetails, "Delhi")
newFunc()
