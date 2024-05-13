let panels = document.getElementsByClassName("panel");
let prevActivePanel = document.getElementById("item-one");

function updatePanel(event) {
  let currentPanel = event.currentTarget;

  prevActivePanel.classList.remove("active");
  currentPanel.classList.add("active");
  prevActivePanel = currentPanel;
}

for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener("click", updatePanel);
}