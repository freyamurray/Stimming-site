function themeSwitch() {
    const element = document.body;
    const button = document.getElementById("themeswitch");
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
  button.textContent = isDark ? "light mode" : "dark mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const button = document.getElementById("themeswitch");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    button.textContent = "light mode";
  } else {
    button.textContent = "dark mode";
  }
} );


function down() {
    document.getElementById('click-down').play();
}

function up() {
    document.getElementById('click-up').play();
}

function kbDown() {
    document.getElementById("kbdown").play();
}

function kbUp() {
    document.getElementById("kbup").play();
}

function mkbDown() {
    document.getElementById("mkbdown").play();
}

function mkbUp() {
    document.getElementById("mkbup").play();
}

function oldDown() {
    document.getElementById("olddown").play();
}

function oldUp() {
    document.getElementById("oldup").play();
}

function switchDown() {
    document.getElementById("switchdown").play();
}

function switchUp() {
    document.getElementById("switchup").play();
}

function clackDown() {
    document.getElementById("clackdown").play();
}

function clackUp() {
    document.getElementById("clackup").play();
}

function unClick() {
    document.getElementById("unclick").play();
}