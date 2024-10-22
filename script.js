const stickerModal = document.getElementById('stickerModal');
const stickerOptions = document.querySelectorAll('.sticker-option');
let selectedSticker = null;

document.getElementById('addSticker').addEventListener('click', function() {
    stickerModal.style.display = "block";
});

document.querySelector('.close').addEventListener('click', function() {
    stickerModal.style.display = "none";
});

stickerOptions.forEach(sticker => {
    sticker.addEventListener('click', function() {
        selectedSticker = sticker.src; 
        stickerModal.style.display = "none";
    });
});

document.getElementById('addMessage').addEventListener('click', function() {
    const messageText = document.getElementById('message').value;
    const popSound = document.getElementById('popSound');

    if (messageText.trim() === "") {
        alert("Please write a message!");
        return;
    }

    const messageContainer = document.getElementById('messageContainer');
    const messageCard = document.createElement('div');
    messageCard.classList.add('message-card');

    if (selectedSticker) {
        const stickerImg = document.createElement('img');
        stickerImg.src = selectedSticker;
        stickerImg.classList.add('sticker');
        messageCard.appendChild(stickerImg);
        selectedSticker = null; 
    }

    
    const messageTextNode = document.createElement('p');
    messageTextNode.textContent = messageText;
    messageCard.appendChild(messageTextNode);

    messageContainer.appendChild(messageCard);
    document.getElementById('message').value = "";

    popSound.play();
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

