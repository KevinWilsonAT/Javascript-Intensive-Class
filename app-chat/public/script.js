const btnSend = document.getElementById('send');
const msgBox = document.getElementById('text');
const chat = document.getElementById('msgs');

const socket = io();

btnSend.addEventListener('click', () => {
    if(msgBox.value !== ""){
        socket.emit('new message', msgBox.value);
        msgBox.value = "";
    }
})

socket.addEventListener('new message', (msg) => {
    const msgElement = document.createElement('li');
    msgElement.textContent = msg;
    msgElement.classList.add('msg');
    chat.appendChild(msgElement)
});