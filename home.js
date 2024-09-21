// Function to play a sound based on the provided element ID
function playSound(id) {
    // Get the audio element by its ID
    const sound = document.getElementById(id);

    // Check if the sound element exists
    if (sound) {
        // Attempt to play the sound
        sound.play().catch(error => {
            // Log an error if there's an issue playing the sound
            console.log("Error playing sound:", error);
        });
    } else {
        // Log an error if the sound element with the specified ID is not found
        console.log(`Sound element with id ${id} not found.`);
    }
}

// Function to play Pikachu's sound by passing the ID of its audio element
function pikaSound() {
    playSound('pikachu-Sound');
}

// Function to play Bulbasaur's sound by passing the ID of its audio element
function bulbasaurSound() {
    playSound('bulbasaur-Sound');
}

// Function to play Squirtle's sound by passing the ID of its audio element
function squirtleSound() {
    playSound('squirtle-Sound');
}

// Function to play Charmander's sound by passing the ID of its audio element
function charmanderSound() {
    playSound('charmander-Sound');
}
