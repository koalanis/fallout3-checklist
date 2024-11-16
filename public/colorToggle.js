const hardCodedTheme = "pip-amber";

const currentTheme = localStorage.getItem("theme");

const colors = ["pip-green", "pip-amber", "pip-white"];
function getTheme() {
  if (currentTheme) return currentTheme;

  if (hardCodedTheme) return hardCodedTheme;

  return "pip-amber";
}

let themeValue = getTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreferences();
}

function reflectPreferences() {
  document.firstElementChild.setAttribute("data-theme", themeValue);
}

reflectPreferences();

window.onload = () => {
  reflectPreferences();

  document.querySelector("#colorButton")?.addEventListener("click", () => {
    const idx = colors.indexOf(themeValue);
    const nextIdx = (idx + 1) % colors.length;
    themeValue = colors[nextIdx];
    setPreference();
  });
};
