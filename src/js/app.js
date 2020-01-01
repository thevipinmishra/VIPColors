// Add BG Color to DIVs
const colors = document.querySelectorAll(".colors__grid .color");

colors.forEach(color => {
  color.style.background = color.dataset.color;
  color.innerHTML = `<span>Copy</span>`;
  color.addEventListener("click", function() {
    const alert = document.querySelector(".alert");
    alert.style.background = color.dataset.color;
    alert.classList.toggle("flash");
    setTimeout(function() {
      alert.classList.remove("flash");
    }, 500);
  });
});

// Color Count
const flatColors = document.querySelectorAll(".flat__colors .color");
const flatCount = flatColors.length;
document.querySelector("#flat-count").textContent = `${flatCount} Colors`;

const matColors = document.querySelectorAll(".material__colors .color");
const matCount = matColors.length;
document.querySelector("#material-count").textContent = `${matCount} Colors`;

// Copy to Clipbaord
new ClipboardJS(".color", {
  text: function(trigger) {
    return trigger.getAttribute("data-color");
  }
});
