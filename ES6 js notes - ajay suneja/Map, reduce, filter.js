// foreach
// filter
// map
// sort
// reduce

const companies = [
    { name: "google", age: "1212" },
    { name: "microsoft", age: "7612" },
    { name: "yulu", age: "1252" },
]

// foreach

companies.forEach(function (item) {
    console.log(item.name)
})

companies.forEach((item) => {
    console.log(item.name)
})

// filter

let val = companies.filter(function (item) {
    if (item.name === "google") {
        return item
    }
})

let val1 = companies.filter((item) => (item.name === "google"))

console.log(val)
console.log(val1)

// map 

companies.map((item) => {
    console.log(item)
})


// sort

const sorted = companies.sort(function (c1, c2) {
    if (c1.age > c2.age) {
        return 1
    }
    else {
        return -1
    }
})

const sorted1 = companies.sort((c1, c2) => {
    if (c1.age > c2.age) {
        return 1
    }
    else {
        return -1
    }
})


const sorted2 = companies.sort((c1, c2) => c1.age > c2.age ? 1 : -1)
companies.sort(function(a, b) { return a - b })


console.log(sorted)
console.log(sorted1)
console.log(sorted2)

// reduce

let addarr = [1, 2, 3, 4, 5]
const sumAge = addarr.reduce(function (total, item) {
    return total + item
}, 0)

const sumAge1 = addarr.reduce((total, item) => {
    return total + item
}, 0)


const sumAge2 = addarr.reduce((total, item) => (total + item), 0)
console.log(sumAge)
console.log(sumAge1)
console.log(sumAge2)