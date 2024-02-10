let paraContainer = document.querySelector(".para-container");
let paraBoxes = document.querySelectorAll(".para-box");

function createNote() {
    let p = document.createElement("p");
    let img = document.createElement("img");
    img.src = "delete.png";
    p.setAttribute("contenteditable", "true");
    p.className = "para-box";
    paraContainer.appendChild(p).appendChild(img);
    storedData();
}

paraContainer.addEventListener("click", function(details){
    if(details.target.tagName === "IMG") {
        details.target.parentElement.remove();
        storedData();
    } else if(details.target.tagName === "P") {
        paraBoxes = document.querySelectorAll(".para-box");
        paraBoxes.forEach(function(notes) {
            notes.addEventListener("keyup", storedData);
        })
    }
})

function storedData() {
    localStorage.setItem("notes",paraContainer.innerHTML);
}
function showData() {
    paraContainer.innerHTML = localStorage.getItem("notes");
}
showData();