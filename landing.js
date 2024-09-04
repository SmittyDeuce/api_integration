function pikaSound() {
    const sound = document.getElementById("pikaSound");
    if (sound) {
        sound.play().then(() => {
            // Delay navigation by 1 second
            setTimeout(() => {
                window.location.href = "home.html";
            }, 2000);
        }).catch(error => console.log("Error playing sound:", error));
    } else {
        console.log("Sound element not found.");
    }
}
