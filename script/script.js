let colorInput = document.getElementById("colorInput");
let transInput = document.getElementById("transperencyInput");
let clearButton = document.getElementById("clearButton");

let sx = undefined;
let ex = undefined;
let sy = undefined;
let ey = undefined;

var c = document.getElementById("canvas");
var rect = c.getBoundingClientRect();
var ctx = c.getContext("2d");
var img = new Image();
img.src = "img/imgs.avif";
img.onload = () => {
    c.width = 612;
    c.height = 408;
    ctx.drawImage(img, 0, 0, 612, 408);
};
c.addEventListener("mousedown", function (e) {
    sx = e.clientX - rect.left;
    sy = e.clientY - rect.top;
    console.log(sx);
});
c.addEventListener("mouseup", function (e) {
    ex = e.clientX - rect.left;
    ey = e.clientY - rect.top;
    console.log(ex);
    createFilter();
});

clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    ctx.clearRect(0, 0, 612, 408);
    ctx.globalAlpha = 1;
    ctx.drawImage(img, 0, 0, 612, 408);
});

function createFilter() {
    ctx.globalAlpha = transInput.value / 100;
    ctx.fillStyle = colorInput.value;
    ctx.fillRect(sx, sy, ex - sx, ey - sy);
}