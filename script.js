const gameList = document.getElementById("gameList");
const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const gameFrame = document.getElementById("gameFrame");
const backBtn = document.getElementById("backBtn");
const iframe = document.getElementById("gameFrame");
const newTabBtn = document.getElementById("newTabBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

newTabBtn.addEventListener("click", () => {
    if (iframe.src) {
        window.open(iframe.src, "_blank");
    }
});

fullscreenBtn.addEventListener("click", () => {
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
});

// ---------------- PASSWORD SYSTEM ----------------

const correctPassword = "67";

const loginScreen = document.getElementById("loginScreen");
const siteContent = document.getElementById("siteContent");
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("passwordInput");
const errorMsg = document.getElementById("errorMsg");

loginBtn.addEventListener("click", () => {
    if (passwordInput.value === correctPassword) {
        loginScreen.style.display = "none";
        siteContent.style.display = "block";
    } else {
        errorMsg.textContent = "Incorrect password.";
    }
});

// Allow Enter key
passwordInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        loginBtn.click();
    }
});

// 🔥 Add your games here
const games = [
    {
        name: "SKIBIDI ATTACK",
        description: "SKIBIDI.",
        url: "https://landsedu112.github.io/g22/class-392",
        width: 810,
        height: 540,
        thumbnail: "https://m.media-amazon.com/images/I/81DDkTrLcTL.png"
    },
    {
        name: "Retro Bowl",
        description: "Futball.",
        url: "https://landsedu112.github.io/g5/class-400",
        width: 810,
        height: 540,
        thumbnail: "https://play-lh.googleusercontent.com/WRM5Y1xZmzcCP1YtO5zl6G2g7CU5c5ZfjX4UVrgi1bpNgkfy-wuB-bQx3kkeRfaGYQ=w600-h300-pc0xffffff-pd"
    },
        {
        name: "Slope 2",
        description: "slope 2.",
        url: "https://landsedu112.github.io/g2/class-437",
        width: 810,
        height: 540,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LzrlcLgoyz4Wfq-czWCI-GdtEB_pLWJY1Q&s"
    },
       {
        name: "Minecraft",
        description: "Mine + craft = minecraft.",
        url: "MC.html",
        width: 810,
        height: 540,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNM2PlvKvyt6FQckBQvb1u7Yzf-wwvxgDffg&s"
    },
    {
        name: "Geomtry dash lite",
        description: "geo dash lite.",
        url: "geodash.html",
        width: 810,
        height: 540,
        thumbnail: "https://play-lh.googleusercontent.com/p7kWbWBFxQIrzolEqiV5uSvctLeyssZvBV7UBOX29wzZI52IdcSs4qCB_zsQJL1mt9A"
    },
    {
        name: "Bitlife",
        description: "Create your own alternate life",
        url: "Bitlife.html",
        width: 810,
        height: 540,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWgIRmr1_PK-JOKBAbLveo1O-zfgcyrw2ncdJ006Vte91uo47Jc9uqU5ce3_V53nxsyzZ&s=10"
    },
    {
        name: "gorilla tag",
        description: "monke",
        url: "gtag.html",
        width: 810,
        height: 540,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWgIRmr1_PK-JOKBAbLveo1O-zfgcyrw2ncdJ006Vte91uo47Jc9uqU5ce3_V53nxsyzZ&s=10"
    }
];

// Create game cards
games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

   card.innerHTML = `
    <img src="${game.thumbnail}" alt="${game.name}" class="game-thumb">
    <h3>${game.name}</h3>
    <p>${game.description}</p>
`;


    card.addEventListener("click", () => {
        loadGame(game);
    });

    gameList.appendChild(card);
});

function loadGame(game) {
    homeScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    gameFrame.src = game.url;
    gameFrame.style.width = game.width + "px";
    gameFrame.style.height = game.height + "px";

    gameFrame.setAttribute("allowfullscreen", "");
    gameFrame.setAttribute("scrolling", "no");
}

backBtn.addEventListener("click", () => {
    gameFrame.src = "";
    gameScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
});
