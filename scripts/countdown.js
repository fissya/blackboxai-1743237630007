// Countdown timer functionality
document.addEventListener('DOMContentLoaded', function() {
    const eventDate = new Date(2024, 11, 15); // December 15, 2024
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            countdownElement.innerHTML = '<div>Event has started!</div>';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.innerHTML = `
            <div class="countdown-item">${days} Days</div>
            <div class="countdown-item">${hours} Hours</div>
            <div class="countdown-item">${minutes} Minutes</div>
        `;
    }

    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
});