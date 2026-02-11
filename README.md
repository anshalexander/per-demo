# 💕 Love Puzzle - Valentine's Special

A beautiful, romantic jigsaw puzzle game with a Valentine's Day theme!

## Features

- 🧩 **Medium Complexity**: 5x5 grid (25 puzzle pieces)
- 🎨 **Valentine Theme**: Beautiful pink and purple gradient design with floating hearts
- ⏱️ **Timer & Move Counter**: Track your solving time and moves
- 👁️ **Preview Feature**: Peek at the original image when you're stuck
- 🔄 **Shuffle**: Restart with a new shuffle anytime
- 🎉 **Completion Celebration**: Cheeky romantic message with confetti and hearts
- 📱 **Responsive Design**: Works on desktop and mobile devices

## How to Use

### 1. Add Your Image

Replace the `sample-image.jpg` file in the puzzle-app folder with your own image:

- **Recommended size**: 500x500 pixels (square images work best)
- **Format**: JPG, PNG, or any web-compatible image format
- **Name**: Keep it as `sample-image.jpg` OR update the `IMAGE_URL` in `script.js` (line 4)

### 2. Open the Game

Simply open `index.html` in your web browser!

### 3. Customize (Optional)

You can customize the game in `script.js`:

- **Complexity**: Change `GRID_SIZE` (line 2)
  - 3 = Easy (9 pieces)
  - 5 = Medium (25 pieces) - Current setting
  - 7 = Hard (49 pieces)

- **Piece Size**: Change `PIECE_SIZE` (line 3)
  - Default is 100px

- **Completion Message**: Edit in `index.html` (lines 52-54)

## How to Play

1. **Drag and Drop**: Click and drag puzzle pieces to swap them
2. **Preview**: Click the "👁️ Peek" button to see the original image
3. **Shuffle**: Click "🔄 Shuffle" to restart with a new arrangement
4. **Complete**: Match all pieces to their correct positions!

## Tech Stack

- Pure HTML, CSS, and JavaScript
- No dependencies or frameworks needed
- Drag and Drop API for smooth interactions
- CSS animations for beautiful effects

## Browser Support

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Tips

- The puzzle pieces will highlight in green when correctly placed
- Watch your moves and time - try to beat your record!
- Use the preview feature when you're stuck

Enjoy your romantic puzzle! 💕
