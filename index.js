let search_icon = document.querySelector(".search_icon");
let menu_icon = document.querySelector(".menu_icon");
let search = document.querySelector(".search");
let nav_items = document.querySelector(".nav_items");

search_icon.addEventListener("click", () => {
    search.classList.toggle("display_none");
})

menu_icon.addEventListener("click",() => {
    nav_items.classList.toggle("active");
})