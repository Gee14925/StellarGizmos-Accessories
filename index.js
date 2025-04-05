// Get the button and the message elements
const button = document.getElementById('mission-button');
const message = document.getElementById('mission-message');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Display the message when the button is clicked
    message.style.display = 'block';
    message.textContent = 'At StellarGizmos, we strive for excellence in every product we create, ensuring that they meet the needs of the digital lifestyle.';
});