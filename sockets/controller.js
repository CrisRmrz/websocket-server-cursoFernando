

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id)
            
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    })

    socket.on('enviar-mensaje', ( payload, callback ) => { //Recibir mensaje del cliente en el servidor

        const id = 123456;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload); //Para enviar mensaje a todos los usuarios conectados

    })

}

module.exports = {
    socketController
}