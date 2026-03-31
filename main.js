document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.getElementById('numbers');
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        // Default to dark mode for better "neon" effect
        body.classList.add('dark-theme');
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
        localStorage.setItem('theme', currentTheme);
    });

    generateBtn.addEventListener('click', () => {
        generateAndDisplayNumbers();
    });

    function generateAndDisplayNumbers() {
        const numbers = new Set();
        while(numbers.size < 7) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const numbersArray = Array.from(numbers);
        const bonusNumber = numbersArray.pop(); // Take the last one as bonus
        const sortedNumbers = numbersArray.sort((a, b) => a - b);

        numbersDisplay.innerHTML = ''; 
        
        // Add main numbers
        sortedNumbers.forEach(number => {
            const ball = document.createElement('div');
            ball.className = 'number-ball';
            ball.textContent = number;
            numbersDisplay.appendChild(ball);
        });

        // Add plus sign
        const plusSign = document.createElement('div');
        plusSign.className = 'plus-sign';
        plusSign.textContent = '+';
        numbersDisplay.appendChild(plusSign);

        // Add bonus number
        const bonusBall = document.createElement('div');
        bonusBall.className = 'number-ball bonus';
        bonusBall.textContent = bonusNumber;
        numbersDisplay.appendChild(bonusBall);
    }
});
