/* console.log("test");

let x = document.querySelector(".box")
console.log(x);
x.style.backgroundColor = "rgb(255,255,0)";
const header = document.querySelector("#color");
header.style.backgroundColor "rgb(55, 242, 105)"
header.textContent = "Hello World"; */

function getRGB(); {
    let r = Math.floor(Math.random()) * 256;
    let g = Math.floor(Math.random()) * 256;
    let b = Math.floor(Math.random()) * 256;
    console.log(r, g, b);
    const box = document.querySelector(".box")
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
    header.textContent = `rgb(${r},${g},${b})`;
}
function inject() {

}

document.getElementById("btn").addEventListener("click", function() {
    console.log("test");
    x++;
    header.textContent = `Clicked ${x}`;
});
