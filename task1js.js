var btn = document.getElementById('btnSend');
btn.addEventListener('click', () => {
    var name = document.getElementById('nameInput').value;
    var textMes = document.getElementById('messageInput').value;
    if (name !== '' || textMes !== '') {
        var date = new Date().toLocaleString();
        
        var newMessage = document.createElement('div');
        newMessage.classList.add('aSendMes');

        var messageContent = `
            <div class="headCard"><b>${name}</b><span class="float-right"><b>${date}</b></span></div>
            <p>${textMes}</p>`;
        newMessage.innerHTML = messageContent;

        var notYetSMElement = document.querySelector('.notYetSM');

        notYetSMElement.parentNode.insertBefore(newMessage, notYetSMElement);

        document.getElementById('nameInput').value = '';
        document.getElementById('messageInput').value = '';
    } else {
        alert('Empty message or name.');
    }
});
