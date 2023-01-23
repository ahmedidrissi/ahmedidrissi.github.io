function setTheme(themeName, imagePath) {
  link = document.getElementById("hello-world");
  link.setAttribute("src", imagePath)
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function switchTheme() {
  if (localStorage.getItem('theme') == 'theme-1') {
    setTheme('theme-2', "assets/img/hello_world_2.png");
  } else {
    setTheme('theme-1', "assets/img/hello_world_1.png");
  }
}

function loadTheme() {
  if (localStorage.getItem('theme') == 'theme-1') {
    setTheme('theme-1', "assets/img/hello_world_1.png");
  } else {
    setTheme('theme-2', "assets/img/hello_world_2.png");
  }
}