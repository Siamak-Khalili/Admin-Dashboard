const toggler = document.querySelector(".sidebar__toggler");
const sidebar = document.querySelector(".dashboard__sidebar");

toggler.addEventListener("click", (e) => {
    sidebar.classList.toggle("sidebar__expanded");
    console.log(sidebar.className);
});



document.addEventListener("DOMContentLoaded", () => {
    const sidebarItems = document.querySelectorAll(".sidebar__item");
    const contentSections = document.querySelectorAll(".content");

    if (sidebarItems.length && contentSections.length) {
        sidebarItems.forEach((tab) => {
            tab.addEventListener("click", () => {
                const target = document.getElementById(tab.dataset.tabTarget);

                if (target) {
                    sidebarItems.forEach((t) => t.classList.remove("sidebar__item--active"));
                    contentSections.forEach((content) => content.classList.remove("content--active"));

                    tab.classList.add("sidebar__item--active");
                    target.classList.add("content--active");
                }
            });
        });
    } else {
        console.error("sidebarItems or contents not found.");
    }
});
