# Typing Game JS

A simple and responsive typing game built with vanilla JavaScript that helps users practice their typing skills using random quotes.

## Features

- Random quotes from Quotable API
- Real-time typing feedback
- Word-by-word highlighting
- Mobile responsive design
- Loading states with spinner
- Completion time tracking
- Error highlighting
- Clean, modern UI

## Demo

[Live Demo](your-demo-link-here) <!-- Add your deployed link when available -->

## Screenshots

<!-- Add screenshots here -->

## Getting Started

### Prerequisites

- Modern web browser
- Local development server (optional)

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-repo-url.githttps://github.com/tanloi201710/typing-game-js.git
```
2. Navigate to the project directory

```bash
cd typing-game-js
```
3. Run locally using one of the following methods:

***Using Python:***
```bash
python -m http.server 8000
```

***Using Node.js:***
```bash
npx http-server
```

Or simply open the `index.html` file in your browser.

## Project Structure

typing-game-js/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # CSS styles
├── js/
│   ├── main.js        # Entry point
│   ├── game.js        # Game logic
│   ├── quote-service.js  # API handling
│   └── ui-controller.js  # UI updates
└── README.md          # Project documentation


## How to Play

1. Click the "Start" button to begin
2. Type the highlighted word
3. Press space to move to the next word
4. Complete the entire quote to finish
5. View your completion time
6. Click "Run Again" to try another quote

## Technical Details

- Built with vanilla JavaScript (ES6+)
- Uses ES6 modules for code organization
- Fetches quotes from [Quotable API](https://api.quotable.io/)
- Mobile-first responsive design
- No external dependencies

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- Quotes provided by [Quotable API](https://github.com/lukePeavey/quotable)
- Inspired by typing practice websites