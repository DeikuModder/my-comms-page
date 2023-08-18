const discordbtn = document.getElementById("clipboard")

discordbtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText('gab3073')
    } catch (error) {
        console.log('error')
    }

    window.alert("Discord ID copied to clipboard!")
})

const navBtn = document.getElementById("btnToggle");
const navBar = document.getElementById("navicons");

navBtn.addEventListener('click', () => {
    const visibility = navBar.getAttribute("data-visible");

    if (visibility === "false"){
        navBar.setAttribute("data-visible", true);
        navBtn.setAttribute("aria-expanded", true);
    }
    else {
        navBar.setAttribute("data-visible", false);
        navBtn.setAttribute("aria-expanded", false);
    }
})