// GET CONTAINER
const messageContainer = document.querySelector('.container');

// FUNCTION TO REMOVE MESSAGE
function removeMessageHandler(e) {
    if(e.target.nodeName === 'BUTTON') {
        e.target.parentElement.remove();
    }
}

// ATTACH EVENT HANDLER TO THE CONTAINER
messageContainer.addEventListener('click', removeMessageHandler);