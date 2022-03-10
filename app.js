// tu código aquí

const balloons = document.querySelectorAll(".balloon");
let poppedBalloons = 0;

balloons.forEach(element => {
    element.addEventListener("mouseover", function (event) {
        event.target.style.background = 0;
        event.target.textContent = "POP!";
        poppedBalloons++;

        checkAllBalloonsPopped();
    });
});

function checkAllBalloonsPopped() {
    if (balloons.length == poppedBalloons) {
        document.querySelector("#yay-no-balloons").style.display = "block";
        document.querySelector("#balloon-gallery").style.display = "none";
    }
}