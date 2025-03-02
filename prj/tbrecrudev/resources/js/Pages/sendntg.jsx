const socket = new WebSocket('ws://localhost:8765');

socket.onopen = () => {
    console.log('WebSocket соединение установлено');
    socket.send('НА САЙТЕ НОВОЕ СОБЫТИЕ');
};


function redirectToExample() {
     window.location.href = 'http://localhost:8000/main';
 }


 redirectToExample();