// Game Configuration
const GRID_SIZE = 5; // 5x5 for medium complexity (25 pieces)
const PIECE_SIZE = 100; // pixels
const IMAGE_URL = 'sample-image.jpg'; // You can replace this with your image

// Game State
let puzzlePieces = [];
let moves = 0;
let timer = 0;
let timerInterval = null;
let gameStarted = false;
let draggedElement = null;
let draggedIndex = null;

// DOM Elements
const puzzleBoard = document.getElementById('puzzle-board');
const timerDisplay = document.getElementById('timer');
const movesDisplay = document.getElementById('moves');
const previewBtn = document.getElementById('preview-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const previewModal = document.getElementById('preview-modal');
const previewImage = document.getElementById('preview-image');
const completionModal = document.getElementById('completion-modal');
const playAgainBtn = document.getElementById('play-again-btn');
const closeBtn = document.querySelector('.close');

// Initialize the game
function init() {
    setupPuzzleBoard();
    createPuzzle();
    shufflePuzzle(); // Start with shuffled pieces, not the complete image
    setupEventListeners();
}

// Setup the puzzle board grid
function setupPuzzleBoard() {
    puzzleBoard.style.gridTemplateColumns = `repeat(${GRID_SIZE}, ${PIECE_SIZE}px)`;
    puzzleBoard.style.gridTemplateRows = `repeat(${GRID_SIZE}, ${PIECE_SIZE}px)`;
    previewImage.src = IMAGE_URL;
}

// Create puzzle pieces
function createPuzzle() {
    puzzlePieces = [];
    puzzleBoard.innerHTML = '';

    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.draggable = true;
        piece.dataset.correctIndex = i;
        piece.dataset.currentIndex = i;
        
        // Calculate background position
        const row = Math.floor(i / GRID_SIZE);
        const col = i % GRID_SIZE;
        const bgPosX = (col * PIECE_SIZE);
        const bgPosY = (row * PIECE_SIZE);
        
        piece.style.backgroundImage = `url(${IMAGE_URL})`;
        piece.style.backgroundPosition = `-${bgPosX}px -${bgPosY}px`;
        piece.style.backgroundSize = `${GRID_SIZE * PIECE_SIZE}px ${GRID_SIZE * PIECE_SIZE}px`;
        piece.style.width = `${PIECE_SIZE}px`;
        piece.style.height = `${PIECE_SIZE}px`;
        
        // Add drag event listeners
        piece.addEventListener('dragstart', handleDragStart);
        piece.addEventListener('dragend', handleDragEnd);
        piece.addEventListener('dragover', handleDragOver);
        piece.addEventListener('drop', handleDrop);
        piece.addEventListener('dragenter', handleDragEnter);
        piece.addEventListener('dragleave', handleDragLeave);
        
        puzzleBoard.appendChild(piece);
        puzzlePieces.push(piece);
    }
}

// Shuffle puzzle pieces
function shufflePuzzle() {
    const indices = Array.from({length: GRID_SIZE * GRID_SIZE}, (_, i) => i);
    
    // Fisher-Yates shuffle - ensure pieces are actually scrambled
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    // Ensure the puzzle is actually shuffled (not in original order)
    let isSame = true;
    for (let i = 0; i < indices.length; i++) {
        if (indices[i] !== i) {
            isSame = false;
            break;
        }
    }
    
    // If by chance we got the same order, shuffle again
    if (isSame) {
        return shufflePuzzle();
    }
    
    // Remove all correct indicators
    puzzlePieces.forEach(piece => piece.classList.remove('correct'));
    
    // Reorder pieces in the DOM
    indices.forEach((originalIndex, newPosition) => {
        const piece = puzzlePieces[originalIndex];
        piece.dataset.currentIndex = newPosition;
        puzzleBoard.appendChild(piece);
    });
    
    // Reset game state
    moves = 0;
    movesDisplay.textContent = moves;
    
    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }
}

// Timer functions
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timer = 0;
    timerInterval = setInterval(() => {
        timer++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Drag and Drop handlers
function handleDragStart(e) {
    draggedElement = e.target;
    draggedIndex = parseInt(e.target.dataset.currentIndex);
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    
    // Remove hover effects from all pieces
    puzzlePieces.forEach(piece => {
        piece.style.border = '2px solid transparent';
    });
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    if (e.target.classList.contains('puzzle-piece') && e.target !== draggedElement) {
        e.target.style.border = '2px solid #ff6b9d';
    }
}

function handleDragLeave(e) {
    if (e.target.classList.contains('puzzle-piece')) {
        e.target.style.border = '2px solid transparent';
    }
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    const targetElement = e.target;
    
    if (targetElement.classList.contains('puzzle-piece') && targetElement !== draggedElement) {
        const targetIndex = parseInt(targetElement.dataset.currentIndex);
        
        // Swap the pieces
        swapPieces(draggedElement, targetElement, draggedIndex, targetIndex);
        
        // Increment moves
        moves++;
        movesDisplay.textContent = moves;
        
        // Check if puzzle is complete
        checkCompletion();
    }
    
    return false;
}

function swapPieces(piece1, piece2, index1, index2) {
    // Update current indices
    piece1.dataset.currentIndex = index2;
    piece2.dataset.currentIndex = index1;
    
    // Get all pieces in order
    const allPieces = Array.from(puzzleBoard.children);
    
    // Create a temporary array to store pieces in correct order
    const orderedPieces = new Array(allPieces.length);
    allPieces.forEach(piece => {
        orderedPieces[parseInt(piece.dataset.currentIndex)] = piece;
    });
    
    // Clear and re-append in order
    puzzleBoard.innerHTML = '';
    orderedPieces.forEach(piece => puzzleBoard.appendChild(piece));
}

// Check if puzzle is complete
function checkCompletion() {
    let isComplete = true;
    
    puzzlePieces.forEach(piece => {
        const correctIndex = parseInt(piece.dataset.correctIndex);
        const currentIndex = parseInt(piece.dataset.currentIndex);
        
        if (correctIndex === currentIndex) {
            piece.classList.add('correct');
        } else {
            piece.classList.remove('correct');
            isComplete = false;
        }
    });
    
    if (isComplete) {
        setTimeout(() => {
            showCompletionModal();
        }, 500);
    }
}

// Show completion modal
function showCompletionModal() {
    stopTimer();
    
    document.getElementById('final-time').textContent = timerDisplay.textContent;
    document.getElementById('final-moves').textContent = moves;
    
    completionModal.classList.add('show');
    
    // Add extra celebration effects
    createHeartExplosion();
}

// Create heart explosion effect
function createHeartExplosion() {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = '30px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.animation = 'heartExplode 2s ease-out forwards';
            
            const angle = (Math.PI * 2 * i) / 20;
            heart.style.setProperty('--tx', `${Math.cos(angle) * 200}px`);
            heart.style.setProperty('--ty', `${Math.sin(angle) * 200}px`);
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 2000);
        }, i * 50);
    }
}

// Add heart explosion animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes heartExplode {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Setup event listeners
function setupEventListeners() {
    // Preview button
    previewBtn.addEventListener('click', () => {
        previewModal.classList.add('show');
    });
    
    // Close preview modal
    closeBtn.addEventListener('click', () => {
        previewModal.classList.remove('show');
    });
    
    previewModal.addEventListener('click', (e) => {
        if (e.target === previewModal) {
            previewModal.classList.remove('show');
        }
    });
    
    // Shuffle button
    shuffleBtn.addEventListener('click', () => {
        shufflePuzzle();
    });
    
    // Play again button
    playAgainBtn.addEventListener('click', () => {
        completionModal.classList.remove('show');
        resetGame();
    });
}

// Reset game
function resetGame() {
    stopTimer();
    gameStarted = false;
    moves = 0;
    timer = 0;
    movesDisplay.textContent = moves;
    timerDisplay.textContent = '00:00';
    
    // Remove correct class from all pieces
    puzzlePieces.forEach(piece => piece.classList.remove('correct'));
    
    shufflePuzzle();
}

// Initialize game when page loads
window.addEventListener('load', init);
