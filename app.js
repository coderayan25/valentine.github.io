const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");
const container = document.querySelector(".container");

let noBtnSize = 1;

yesBtn.addEventListener("click", function () {
    celebration.classList.add("active");
    createConfetti();

    // Play a little animation
    setTimeout(() => {
        container.style.transform = "scale(0.8)";
        container.style.opacity = "0";
    }, 100);
});

noBtn.addEventListener("mouseover", function () {
    // Get container bounds
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate random position within container
    const maxX = containerRect.width - btnRect.width - 100;
    const maxY = containerRect.height - btnRect.height - 100;

    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;

    // Move the button
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Make Yes button bigger
    noBtnSize += 0.1;
    yesBtn.style.transform = `scale(${noBtnSize})`;
});

noBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // Move it away even on click
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Make Yes button even bigger
    noBtnSize += 0.2;
    yesBtn.style.transform = `scale(${noBtnSize})`;
});

function createConfetti() {
    const colors = ["#e91e63", "#ff69b4", "#ffc3e1", "#9c27b0", "#ff1744"];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.background =
                colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + "s";
            confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}
