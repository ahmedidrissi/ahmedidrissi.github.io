// Get the root element
var r = document.querySelector(':root');

function Theme1() {
    link = document.getElementById("hello-world");
    link.setAttribute("src", "assets/img/hello_world_1.png")
    var rs = getComputedStyle(r);
    r.style.setProperty('--color-1', rs.getPropertyValue('--theme1-color-1'));
    r.style.setProperty('--color-2', rs.getPropertyValue('--theme1-color-2'));
    r.style.setProperty('--color-3', rs.getPropertyValue('--theme1-color-3'));
    r.style.setProperty('--color-4', rs.getPropertyValue('--theme1-color-4'));
  }

function Theme2() {
  link = document.getElementById("hello-world");
  link.setAttribute("src", "assets/img/hello_world_2.png")
  var rs = getComputedStyle(r);
  r.style.setProperty('--color-1', rs.getPropertyValue('--theme2-color-1'));
  r.style.setProperty('--color-2', rs.getPropertyValue('--theme2-color-2'));
  r.style.setProperty('--color-3', rs.getPropertyValue('--theme2-color-3'));
  r.style.setProperty('--color-4', rs.getPropertyValue('--theme2-color-4'));
}