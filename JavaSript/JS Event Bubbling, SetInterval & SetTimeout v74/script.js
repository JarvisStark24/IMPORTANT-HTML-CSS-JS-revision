// Event Bubbling
document.querySelector('#grandparent').addEventListener('click', () => {
    console.log('Grandparent clicked');
});

document.querySelector('#parent').addEventListener('click', () => {
    console.log('Parent clicked');
});

document.querySelector('#child').addEventListener('click', () => {
    console.log('Child clicked');
});

// Setinterval
let interval = setInterval(() => {
    console.log('Interval');
}, 2000);

// Settimeout
let timeout = setTimeout(() => {
    console.log('Timeout');
}, 3000);

// Helper function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Setinterval with color change for grandparent, parent, and child
let colorInterval = setInterval(() => {
    document.querySelector('#grandparent').style.backgroundColor = getRandomColor();
    document.querySelector('#parent').style.backgroundColor = getRandomColor();
    document.querySelector('#child').style.backgroundColor = getRandomColor();
}, 2000);

// Settimeout with color change for grandparent, parent, and child
let colorTimeout = setTimeout(() => {
    document.querySelector('#grandparent').style.backgroundColor = getRandomColor();
    document.querySelector('#parent').style.backgroundColor = getRandomColor();
    document.querySelector('#child').style.backgroundColor = getRandomColor();
}, 3000);

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(interval);
    clearTimeout(timeout);
    clearInterval(colorInterval);
    clearTimeout(colorTimeout);
});