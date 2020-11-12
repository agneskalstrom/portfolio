const toggle = document.getElementById("toggle");
const pageStyle = document.getElementById("pagestyle");

if (localStorage.getItem("lastActiveSheet")) {
    pageStyle.setAttribute("href", localStorage.getItem("lastActiveSheet"));
}

toggle.addEventListener("click", swapStyleSheet);

function swapStyleSheet() {
    const style = "style";
    const invert = "invert";
    pageStyle.x = invert == pageStyle.x ? style : invert;
    pageStyle.href = './styles/' + pageStyle.x + '.css';
    let selectedSheet = pageStyle.getAttribute("href");
    localStorage.setItem("lastActiveSheet", selectedSheet);
}
