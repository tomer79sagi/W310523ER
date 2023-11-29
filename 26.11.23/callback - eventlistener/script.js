function clicked() {
    alert('You just clicked me');
}

// Attached a callback function called 'clicked' -> a real function
// document.getElementById('btn').addEventListener('click', clicked);
document.getElementById('btn').addEventListener('click', () => {
    alert('You just clicked me');
});