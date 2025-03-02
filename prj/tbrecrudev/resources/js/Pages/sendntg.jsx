


const sendntg = ({ event }) => {
    
    const eventData = {
        title: event.title,
        description: event.description,
        date: event.date,
        start_time: event.start_time,
        end_time: event.end_time,
        type: event.type,
    };
   
const jsonData=JSON.stringify(eventData);

    //socket.send(jsonData);
    console.log(jsonData);
    console.log({event});
};
// const socket = new WebSocket('ws://localhost:8765');
// socket.onopen = () => {
//     console.log('WebSocket соединение установлено');
//     socket.send(jsonData);
// };
 function redirectToExample() {
     window.location.href = 'http://localhost:8000/main';
 }


 redirectToExample();