const hardCodedTheme = "pip-amber";

const currentTheme = localStorage.getItem("theme");

function getTheme() {
  if(currentTheme) return currentTheme;

  if(hardCodedTheme) return hardCodedTheme;

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
    themeValue = themeValue === "pip-green" ? "pip-amber" : "pip-green";
    setPreference()
  })
}




