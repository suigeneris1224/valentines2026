// ===========================
// BACKGROUND HEARTS CREATION
// ===========================
function createFloatingHearts() {
    const heartBg = document.getElementById('heartBg');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartBg.appendChild(heart);
    }
}

// ===========================
// NO BUTTON BEHAVIOR
// ===========================
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.container');
let noBtnClickCount = 0;

function moveButton() {
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate max positions to keep button within container
    const maxX = containerRect.width - btnRect.width - 40; // 40px padding
    const maxY = 200; // Limit vertical movement
    
    // Generate random position
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY - 100;
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // Increase Yes button size slightly each time No is attempted
    noBtnClickCount++;
    const yesBtn = document.getElementById('yesBtn');
    const newScale = 1 + (noBtnClickCount * 0.1);
    yesBtn.style.transform = `scale(${Math.min(newScale, 1.5)})`;
}

// Event listeners for No button
noBtn.addEventListener('mouseenter', moveButton);

noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moveButton();
});

noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    moveButton();
});

// ===========================
// CONFETTI CREATION
// ===========================
function createConfetti(count = 100, colors = ['#f5576c', '#f093fb', '#4facfe', '#ffd89b']) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// ===========================
// SPARKLES CREATION
// ===========================
function createSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    const sparkleIcons = ['✨', '💫', '⭐', '🌟'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = sparkleIcons[Math.floor(Math.random() * sparkleIcons.length)];
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparklesContainer.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 4000);
        }, i * 50);
    }
}

// ===========================
// PAGE TRANSITIONS
// ===========================

// Show celebration page when Yes is clicked
function celebrate() {
    const celebration = document.getElementById('celebration');
    celebration.style.display = 'flex';
    
    // Create confetti
    createConfetti(100);
}

// Show date options page
function showDateOptions() {
    const dateOptions = document.getElementById('dateOptions');
    dateOptions.style.display = 'block';
}

// Show final page when date option is selected
function selectOption(option) {
    const finalPage = document.getElementById('finalPage');
    finalPage.style.display = 'block';
    
    // Create sparkles effect
    createSparkles();
    
    // Create more confetti with additional colors
    createConfetti(150, ['#f5576c', '#f093fb', '#4facfe', '#ffd89b', '#ff6b9d']);
}

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
});