const bool = document.querySelector(".bool");
const fild = document.querySelector(".fild");

fild.addEventListener("click", click);

function click(event) {
  bool.style.top = `${event.clientY - bool.offsetWidth / 2 + 17}px`;
  bool.style.left = `${event.clientX - bool.offsetWidth / 2 + 17}px`;
  console.log(event.clientY)
}
