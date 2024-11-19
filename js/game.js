import quoteService from './quote-service.js';
import uiController from './ui-controller.js';

class TypingGame {
    constructor() {
        this.words = [];
        this.wordIndex = 0;
        this.startTime = 0;
        this.inputEventListener = null;
    }

    async startGame() {
        uiController.setLoading(true);
        
        const quote = await quoteService.getRandomQuote();
        this.words = quote.text.split(' ');
        this.wordIndex = 0;
        
        uiController.updateQuote(quote, this.words);
        uiController.updateGameState(false);
        uiController.setLoading(false);
        
        this.startTime = new Date().getTime();
        this.setupEventListeners();
    }

    setupEventListeners() {
        if (this.inputEventListener) {
            uiController.typedValueElement.removeEventListener('input', this.inputEventListener);
        }

        this.inputEventListener = this.handleInput.bind(this);
        uiController.typedValueElement.addEventListener('input', this.inputEventListener);
        setTimeout(() => uiController.typedValueElement.focus(), 0);
    }

    handleInput(e) {
        const currentWord = this.words[this.wordIndex];
        const typedValue = e.target.value;

        if (this.isGameOver(typedValue, currentWord)) {
            const elapsedTime = new Date().getTime() - this.startTime;
            uiController.updateGameState(true, elapsedTime);
        } else if (this.isWordCompleted(typedValue, currentWord)) {
            this.wordIndex++;
            uiController.highlightWord(this.wordIndex);
            e.target.value = '';
        } else {
            e.target.className = currentWord.startsWith(typedValue) ? '' : 'error';
        }
    }

    isGameOver(typedValue, currentWord) {
        return typedValue === currentWord && this.wordIndex === this.words.length - 1;
    }

    isWordCompleted(typedValue, currentWord) {
        return typedValue.endsWith(' ') && typedValue.trim() === currentWord;
    }
}

export default new TypingGame(); 