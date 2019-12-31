// Add BG Color to DIVs
const colors = document.querySelectorAll(".colors__grid .color");

colors.forEach(color => {
  color.style.background = color.dataset.color;
  color.innerHTML = `<span>Copy</span>`;
  color.setAttribute("role", "button");
  color.setAttribute("tabindex", "0");
  color.addEventListener("click", function() {
    const alert = document.querySelector(".alert");
    alert.style.background = color.dataset.color;
    alert.classList.toggle("flash");
    setTimeout(function() {
      alert.classList.remove("flash");
    }, 700);
  });
});

// Copy to Clipbaord
new ClipboardJS(".color", {
  text: function(trigger) {
    return trigger.getAttribute("data-color");
  }
});
