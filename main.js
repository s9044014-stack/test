document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.getElementById('numbers');

    generateBtn.addEventListener('click', () => {
        generateAndDisplayNumbers();
    });

    function generateAndDisplayNumbers() {
        const numbers = new Set();
        while(numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        numbersDisplay.innerHTML = ''; 
        sortedNumbers.forEach(number => {
            const ball = document.createElement('div');
            ball.className = 'number-ball';
            ball.textContent = number;
            numbersDisplay.appendChild(ball);
        });
    }
});
