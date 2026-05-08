const boxes = document.querySelectorAll(".box");
const message = document.getElementById("message");
const colorName = document.getElementById("colorCode");

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange"
];

let correctColor = "";

function startGame() {

    message.innerText = "";

    correctColor = colors[Math.floor(Math.random() * colors.length)];

    colorName.innerText = correctColor.toUpperCase();

    const shuffled = [...colors].sort(() => Math.random() - 0.5);

    boxes.forEach((box, index) => {

        box.style.background = shuffled[index];

        box.onclick = () => {

            if (shuffled[index] === correctColor) {

                message.innerText = "🎉 You Win!";
                message.style.color = "lime";

                setTimeout(() => {
                    alert("You Won The Game 🎉");
                    startGame();
                }, 300);

            }

            else {

                message.innerText = "❌ Game Over!";
                message.style.color = "red";

                setTimeout(() => {
                    alert("Game Over ❌");
                    startGame();
                }, 300);

            }

        };

    });

}

startGame();