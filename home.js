function playSound(id) {
    const sound = document.getElementById(id);
    if (sound) {
        sound.play().catch(error => console.log("Error playing sound:", error));
    } else {
        console.log(`Sound element with id ${id} not found.`);
    }
}

function pikaSound() {
    playSound('pikachu-Sound');
}

function bulbasaurSound() {
    playSound('bulbasaur-Sound');
}

function squirtleSound() {
    playSound('squirtle-Sound');
}

function charmanderSound() {
    playSound('charmander-Sound');
}