// Get the target date (this Friday at 4 PM)
const targetDate = new Date();
targetDate.setHours(16, 0, 0, 0); // Set hours to 16:00 (4 PM)
targetDate.setDate(targetDate.getDate() + (5 - targetDate.getDay()) % 7); // Go to this Friday

// Update the countdown every second
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.innerHTML = `Countdown to Announcement: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (difference <= 0) {
        countdownElement.innerHTML = "The results are being announced!";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to update the countdown immediately
updateCountdown();
