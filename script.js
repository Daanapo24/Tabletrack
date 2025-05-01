
function editName(player) {
    const newName = prompt("Enter player name:");
    if (newName) {
        document.querySelector(`#score${player}`).nextElementSibling.textContent = `✏️ ${newName}`;
    }
}
