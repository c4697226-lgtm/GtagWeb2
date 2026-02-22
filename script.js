const intro = document.getElementById("intro");
const introText = document.getElementById("introText");
const home = document.getElementById("home");
const clipsPage = document.getElementById("clipsPage");
const textsPage = document.getElementById("textsPage");
let stage = 0;

intro.addEventListener("click", () => {

    if (stage === 0) {

        // Add glitch effect
        introText.classList.add("glitch");

        setTimeout(() => {
            introText.classList.remove("glitch");
            introText.textContent = "Jimmy is not as you seem.";
        }, 600);

        stage++;

    } else if (stage === 1) {

        introText.classList.add("flashOut");

        setTimeout(() => {
            intro.classList.remove("active");
            home.classList.add("active");
        }, 800);

        stage++;
    }
});
/* NAVIGATION */
function openPage(pageId) {
    home.classList.remove("active");
    document.getElementById(pageId).classList.add("active");

    // Automatically load content
    if (pageId === "clipsPage") {
        document.getElementById("jimmyImage").src = "jimmy.png";
    }

    if (pageId === "textsPage") {
        document.getElementById("jimmyText").textContent = "Jimmy.. aka Dino_gtt. he is a youtuber/tiktoker. He is wanted for MANY warcrimes in serveral different countries. He has done bad stuff like eating his teachers, befriending a 80year old man, and befriending a 6 year old aka a minigames kid.He also has managed to scare off jidion.Jimmy is also lying about his age, he says hes 67 years old, but in reality he's 6-7 years old...";
    }
}

function goHome() {
    clipsPage.classList.remove("active");
    textsPage.classList.remove("active");
    home.classList.add("active");
}
