const menu = document.querySelector(".menu-butt");
const menu_butt = document.querySelector(".head-menu-butt");
const animItems = document.querySelectorAll("._animItems");

menu.onclick = () => {
    if (menu_butt.style.display == "block") {
        menu_butt.style.display = "none";
    } else {
        menu_butt.style.display = "block";
    }
};

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint =
                    window.innerHeight - window.innerHeight / animStart;
            }

            if (
                pageYOffset > animItemOffset - animItemPoint &&
                pageYOffset < animItemOffset + animItemHeight
            ) {
                animItem.classList.add("_active");
            } else {
                animItem.classList.remove("_active");
            }
        }
    }

    function offset(elem) {
        const rect = elem.getBoundingClientRect(),
            scrollLeft =
                window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    animOnScroll();
}
