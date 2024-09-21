function pikaSound() {
    // Get the audio element by its ID "pikaSound"
    const sound = document.getElementById("pikaSound");

    // Check if the sound element exists
    if (sound) {
        // Attempt to play the sound
        sound.play().then(() => {
            // Once the sound starts playing, set a timeout to delay navigation
            // Delay is set to 2 seconds (2000 milliseconds)
            setTimeout(() => {
                // Redirect the user to "home.html" after the delay
                window.location.href = "home.html";
            }, 2000);
        }).catch(error => {
            // Log any error that occurs while trying to play the sound
            console.log("Error playing sound:", error);
        });
    } else {
        // Log an error if the sound element is not found
        console.log("Sound element not found.");
    }
}
