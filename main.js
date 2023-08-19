document.querySelector(".row");
document.querySelector(".col-header start");
const placeholders = document.querySelectorAll(".placeholder");
const item = document.querySelector(".item");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  // console.log ('drag start' , event.target)
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}
function dragend(event) {
  // console.log ('drag end' , event.target)
  event.target.classList.remove("hold");
  event.target.classList.remove("hide");
}
function dragover(event) {
  event.preventDefault();
}
function dragenter(event) {
  event.target.classList.add("hovered");
}
function dragleave(event) {
  event.target.classList.remove("hovered");
}
function dragdrop(event) {
  event.target.append(item);
  event.target.classList.remove("hovered");
}
