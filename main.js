document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
    let countdownValue = 5;

    function updateCountdown() {
        countdownElement.textContent = countdownValue;
        if (countdownValue === 0) {
            redirectToWhatsApp();
        } else {
            countdownValue--;
            setTimeout(updateCountdown, 1000);
        }
    }

    function redirectToWhatsApp() {
        window.location.href = "https://wa.me/2349036245382";
    }

    // Start the countdown
    updateCountdown();
});
