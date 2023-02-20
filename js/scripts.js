const menu = document.querySelector(".menu-butt");
const menu_butt = document.querySelector(".head-menu-butt");

menu.onclick = () => {
    if (menu_butt.style.display == "block") {
        menu_butt.style.display = "none";
    } else {
        menu_butt.style.display = "block";
    }
};
