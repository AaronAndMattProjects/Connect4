console.log("foo");

const rows = 8;
const cols = 7;

var game = document.getElementById("game");

for (i = 0; i < rows * cols; i++) {
    var slotItem = document.createElement("div");
    slotItem.classList.add("slot-item");
    slotItem.innerText = i;
    game.appendChild(slotItem);
}
