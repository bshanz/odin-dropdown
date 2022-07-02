const displayBtn = document.getElementById("display-btn");
const holder = document.getElementById("holder");

holder.addEventListener("mouseover", function () {
  const dropDown = document.getElementById("dropdown");

  dropDown.classList.remove("no-dropdown");
  dropDown.classList.add("dropdown");
});

holder.addEventListener("mouseout", function () {
  const dropDown = document.getElementById("dropdown");

  dropDown.classList.remove("dropdown");
  dropDown.classList.add("no-dropdown");
});
