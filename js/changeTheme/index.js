const themes = {
  white: {
    backgroundColor: "rgb(255,255,255)",
    textColor: "rgb(10,10,15)"
  },
  dark: {
    backgroundColor: "rgb(10,10,15)",
    textColor: "rgb(255,255,255)"
  }
};

const THEME_KEY = "theme";
const buttonChangeColor = document.getElementById("button-change-color");
const body = document.body;

function setTheme(themeName) {
  const theme = themes[themeName];
  body.style.backgroundColor = theme.backgroundColor;
  body.style.color = theme.textColor;
  localStorage.setItem(THEME_KEY, themeName);
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark"; 
  setTheme(savedTheme);
}

buttonChangeColor.addEventListener("click", () => {
  const currentTheme = localStorage.getItem(THEME_KEY) || "dark";
  const newTheme = currentTheme === "white" ? "dark" : "white";
  setTheme(newTheme);
});

loadTheme();


