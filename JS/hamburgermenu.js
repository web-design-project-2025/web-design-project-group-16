/* JAVASCRIPT FOR HAMBURGERMENU*/
// Link: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp Date: 13/5-2025
function toggleHamburgerNav() {
  const menu = document.getElementById("menu-ul-hamburger");
  // Only toggle if screen width is less than or equal to 800px
  // Help from chatGPT with innerWidth, Link: https://chatgpt.com/share/68234c22-7f0c-8007-b61a-ed3d97a3ef2e Date: 13/5-2025
  // Also read this before, Link: https://www.w3schools.com/jsref/prop_win_innerwidth.asp Date: 13/5-2025
  if (window.innerWidth <= 850) {
    // End help chatGPT
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }
}

// Help from chatGPT, Link: https://chatgpt.com/share/68234b1f-8770-8007-886a-128190037888 Date: 13/5-2025
window.addEventListener("resize", () => {
  const menu = document.getElementById("menu-ul-hamburger");
  if (window.innerWidth > 850) {
    menu.style.display = "none"; // Ensure it's visible on wide screens
  }
});
// End help chatGPT
