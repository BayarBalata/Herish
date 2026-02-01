const targetDate = new Date('January 1, 2027 00:00:00').getTime();

const messages = [
    "Herish is checking his bank account... maybe.",
    "Money loading... Please wait...",
    "Bayar's patience is currently at 99%.",
    "Is it 2027 yet? Asking for Herish.",
    "Legend says Herish will pay up. Eventually.",
    "Investing in 'Herish Futures'...",
    "Calculating interest... just kidding (or am I?)",
    "Herish: 'I'll do it tomorrow' (Since 2026)",
    "Breaking News: Herish spotted looking at a calendar.",
    "Notification: Payment Pending from Herish."
];

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector('.container').innerHTML = "<h1>IT'S PAYDAY!</h1><p>Herish, where is the money?</p>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(3, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

function cycleMessages() {
    const msgElement = document.getElementById('funny-message');
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    msgElement.style.opacity = 0;
    setTimeout(() => {
        msgElement.innerText = `"${randomMsg}"`;
        msgElement.style.opacity = 1;
    }, 500);
}

setInterval(updateTimer, 1000);
setInterval(cycleMessages, 5000);
updateTimer();
cycleMessages();