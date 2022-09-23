// event bubbling ---> child to parent - event if started from child will go till its parent if they too have event attached 


// event capturing ---> parent to child - event attached to a parent will go towards its child if child too have event attached

// also known as trickling

let div = document.querySelector('div');
let button = document.querySelector('button');

// event bubbling 

div.addEventListener("click" , () =>{
    console.log("div")
})

button.addEventListener("click" , () =>{
    console.log("button")
})

// event capturing

div.addEventListener("click" , () =>{
    console.log("div")
}, true)

button.addEventListener("click" , () =>{
    console.log("button")
}, true)

// to stop event bubbling ---> add e.stopPropagation() to child

button.addEventListener("click" , (e) =>{
e.stopPropagation()
    console.log("button")
})

// stop immidiate propogation ---> if we have more than one event on element then immidiate propogation will run both the events and then stop propogation

button.addEventListener("click" , () =>{
    console.log("button")
})

button.addEventListener("click" , (e) =>{
    e.stopImmediatePropagation()
    console.log("button1")
})
