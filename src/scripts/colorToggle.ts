
const colorMap = {
  "green": {
    light: "--pip_green-light",
    mid: "--pip_green-mid",
    dark: "--pip_green-dark",
  },
  "amber": {
    light: "--pip_amber-light",
    mid: "--pip_amber-mid",
    dark: "--pip_amber-dark",
  }
}


type Colors = "green" | "amber";

export const updateColors = () => {
    let root = document.documentElement;

    let color = localStorage.getItem("color") as Colors || "green";
    const Var = (str) => `var(${str})`;

    root.style.setProperty('--pip-light', Var(colorMap[color].light));
    root.style.setProperty('--pip-mid', Var(colorMap[color].mid));
    root.style.setProperty('--pip-dark', Var(colorMap[color].dark));
}

export const toggleColors = () => {
    let root = document.documentElement;

    let color = localStorage.getItem("color") as Colors || "green";

    if(color === "green") {
        color = "amber";
    } else {
        color = "green";
    }
    localStorage.setItem("color", color)
    updateColors();
}



