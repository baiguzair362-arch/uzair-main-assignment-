var resourse = prompt("what you want")
if (resourse.toLowerCase() === "accending and deccending") {
var numtype = prompt("what you want accending or deccending")
if(numtype.toLowerCase() === "accending") {
var numinput = Number(prompt("how much number do you want to input"))
var store = [];
var sum = 0;
for(var i = 1; i <= numinput; i++) {
    var input = Number(prompt("enter number "+i))
    store.push(input)
    sum += input;
}
for(var i = 0; i <= store.length; i++) {
    for(var j = 0-1; j <= store.length; j++) {
        if(store[i] < store[j]) {
            var swip = store[j]
            store[j] = store[i]
            store[i] = swip
        }
    }
}
console.log(store)
console.log("largest number: " + store[store.length-1])
console.log("smallest number: "+ store[0])
console.log("sum: "+ sum)
}

else if(numtype.toLowerCase() === "deccending") {
var numinput = Number(prompt("how much number do you want to input"))
var store = [];
var sum = 0;
for(var i = 1; i <= numinput; i++) {
    var input = Number(prompt("enter number "+i))
    store.push(input)
    sum += input;
}
for(var i = 0; i <= store.length; i++) {
    for(var j = 0-1; j <= store.length; j++) {
        if(store[i] > store[j]) {
            var swip = store[j]
            store[j] = store[i]
            store[i] = swip
        }
    }
}
console.log(store)
console.log("largest number: "+store[0] )
console.log("smallest number: "+store[store.length-1])
console.log("sum: "+sum)
}
else {
    console.log("please enter correct spelling")
}
}
else if (resourse.toLowerCase() === "table") {
var table = Number(prompt("which table do you want"))
var limit = Number(prompt("please enter limit"))
for(var i = 1; i <= limit; i++) {
    console.log(table+"x"+i+"="+table*i)
}
if(isNaN(table)) {
    console.log("please enter correct input")
}
else if (isNaN(limit)) {
    console.log("please enter correct input")
}
}
else if(resourse.toLowerCase() === "counting") {
    var starting = Number(prompt("enter starting"))
    var ending = Number(prompt("enter ending"))
    for(var i = starting; i <= ending; i++) {
        console.log(i)
    }
    if(starting > ending) {
        for(var i = starting; i >= ending; i-- ) {
            console.log(i)
        }
    }
}

