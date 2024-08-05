let sqr = document.querySelector("#sqr");
let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let start = document.querySelector("#start"); 
let stop = document.querySelector("#stop");

// Style css ---------------------------------
sqr.style.height = "300px";
sqr.style.width = "300px";
sqr.style.border = "1px solid";
sqr.style.backgroundColor = "gray";
sqr.style.borderRadius = "10px";

btn.style.backgroundColor = "gray";
btn.style.padding = "10px 20px";
btn.style.width = "300px";
btn.style.borderRadius = "10px";
btn.style.marginTop = "10px";

input.style.width = "300px";
input.style.height = "30px"
input.style.marginTop = "10px";
input.style.backgroundColor = "gray";
input.style.borderRadius = "10px";

start.style.width = "150px";
start.style.height = "30px";
start.style.marginTop = "10px";
start.style.backgroundColor = "gray";
start.style.borderRadius = "10px";

stop.style.width = "150px";
stop.style.height = "30px";
stop.style.marginTop = "10px";
stop.style.backgroundColor = "gray";
stop.style.borderRadius = "10px";



// Script js -----------------------------------

// let arr = ["red", "green", "yellow", "blue", " purple", "orange"];
// let index = -1;

let arr = [
    "red", "maroon", "brown", // Red shades
    "orange", "darkorange", "coral", // Orange shades
    "yellow", "gold", "khaki", // Yellow shades
    "green", "lime", "forestgreen", "olive", // Green shades
    "cyan", "aqua", "turquoise", // Cyan shades
    "blue", "navy", "royalblue", // Blue shades
    "purple", "indigo", "violet", // Purple shades
    "magenta", "fuchsia", "pink" // Pink shades
];

console.log(arr);


let index = 0;
let interval;

btn.addEventListener("click", colorChange);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        colorC();
    }
})

start.addEventListener("click", colorLoop);

stop.addEventListener("click", () => {
    clearInterval(interval);
    // sqr.style.backgroundColor = "gray";
})



function colorChange() {
    // index++;
    // sqr.style.backgroundColor = arr[index];

    // if(index > arr.length){
    //     index = -1;
    // }
    sqr.style.backgroundColor = arr[index];
    index = (index + 1) % arr.length;
}

function colorC() {
    let val = input.value;
    sqr.style.backgroundColor = val;
    input.value = "";
}

function colorLoop() {
    interval = setInterval(colorChange, 1000);
}
