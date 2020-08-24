function turnNavigationOn(pageContent) {
    const nav = document.getElementsByTagName("nav")[0];
    const navMenu = document.getElementsByClassName("nav-menu")[0];
    const header = document.getElementsByTagName("header")[0];
    header.classList.remove("nav-off");
    header.classList.add("nav-on");
    navMenu.classList.add("active-link");
    pageContent.classList.add("displayOff");
    nav.classList.remove("mobile-navigation-hidden");
    nav.classList.add("mobile-navigation-visible");
}

function turnNavigationOff(pageContent) {
    const nav = document.getElementsByTagName("nav")[0];
    const navMenu = document.getElementsByClassName("nav-menu")[0];
    const header = document.getElementsByTagName("header")[0];
    header.classList.remove("nav-on");
    header.classList.add("nav-off");
    navMenu.classList.remove("active-link");
    nav.classList.remove("mobile-navigation-visible");
    nav.classList.add("mobile-navigation-hidden");
    pageContent.classList.remove("displayOff");
}

export function toggleMobileNavigation() {
    const pageContent = document.getElementsByTagName("main")[0];
    if(pageContent.classList.contains("displayOff"))
        turnNavigationOff(pageContent);
    else
        turnNavigationOn(pageContent);
}