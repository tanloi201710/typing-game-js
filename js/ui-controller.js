class UIController {
    constructor() {
        this.quoteElement = document.getElementById('quote');
        this.messageElement = document.getElementById('message');
        this.typedValueElement = document.getElementById('typed-value');
        this.startButton = document.getElementById('start');
        this.instructionsElement = document.getElementById('instructions');
    }

    updateQuote(quote, words) {
        const spanWords = words.map(word => `<span>${word} </span>`);
        this.quoteElement.innerHTML = spanWords.join('') + `<br><em>- ${quote.author}</em>`;
        this.quoteElement.childNodes[0].className = 'highlight';
    }

    highlightWord(index) {
        Array.from(this.quoteElement.childNodes).forEach(node => node.className = '');
        this.quoteElement.childNodes[index].className = 'highlight';
    }

    setLoading(isLoading) {
        this.startButton.disabled = isLoading;
        this.typedValueElement.disabled = isLoading;
    }

    updateGameState(isGameOver, elapsedTime = null) {
        if (isGameOver) {
            this.messageElement.innerText = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
            this.typedValueElement.disabled = true;
            this.startButton.querySelector('span').textContent = 'Run Again';
            this.instructionsElement.innerHTML = 'Want to try another quote? Click <strong>Run Again</strong> to start!';
        } else {
            this.messageElement.innerText = '';
            this.typedValueElement.value = '';
            this.typedValueElement.className = '';
        }
    }
}

export default new UIController(); 