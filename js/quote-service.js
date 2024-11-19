class QuoteService {
    async getRandomQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            return {
                text: data.content,
                author: data.author
            };
        } catch (error) {
            console.error('Failed to fetch quote:', error);
            return {
                text: 'The quick brown fox jumps over the lazy dog.',
                author: 'Unknown'
            };
        }
    }
}

export default new QuoteService(); 