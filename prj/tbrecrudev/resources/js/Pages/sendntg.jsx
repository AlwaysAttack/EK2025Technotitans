
const socket = new WebSocket('ws://localhost:8765');

socket.onopen = ({events}) => {
    console.log('WebSocket соединение установлено');
    socket.send({events});
};

function redirectToExample() {
    window.location.href = 'http://localhost:8000/';
}


redirectToExample();