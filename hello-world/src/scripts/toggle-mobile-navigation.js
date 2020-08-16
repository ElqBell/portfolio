function turnNavigationOn(pageContent) {
    const nav = document.getElementsByTagName("nav")[0];
    pageContent.classList.add("displayOff");
    nav.classList.remove("mobile-navigation-hidden");
    nav.classList.add("mobile-navigation-visible");
    document.getElementsByTagName("html")[0].classList.add("scroll-lock");
}

function turnNavigationOff(pageContent) {
    const nav = document.getElementsByTagName("nav")[0];
    nav.classList.remove("mobile-navigation-visible");
    nav.classList.add("mobile-navigation-hidden");
    pageContent.classList.remove("displayOff");
    document.getElementsByTagName("html")[0].classList.remove("scroll-lock");
}

export default function toggleMobileNavigation() {
    const pageContent = document.getElementsByTagName("main")[0];
    if(pageContent.classList.contains("displayOff"))
        turnNavigationOff(pageContent);
    else
        turnNavigationOn(pageContent);
}

window.addEventListener('resize', function() {
    const pageContent = document.getElementsByTagName("main")[0];
    if(window.screen.availWidth > 520 && pageContent.classList.contains("displayOff"))
        turnNavigationOff(pageContent);
});