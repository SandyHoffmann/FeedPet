const { Server } = require("socket.io")
const io = new Server({cors: {origin: "http://localhost:3001"}})

let users = []

io.on("connection", (socket) => {
    // console.log("Usuario conectou: ", 'id: '+ socket.handshake.auth.userId + ' socket:  ' + socket.id);
    users.push({"id":socket.handshake.auth.userId,"socketId":socket.id})
    console.log("Lista total = "+JSON.stringify(users))
    console.log("Rooms = "+JSON.stringify(socket.rooms))

    socket.on("disconnect", () => {      
        // console.log(socket.id);  
        users = users.filter(usuario => usuario.socketId !== socket.id)   
        console.log("Lista Usuarios sem Desconectado: "+ JSON.stringify(users))     
    })
    socket.on("send message", mensagem => {
        console.log(mensagem)
        if (mensagem.id_chat) {
            console.log('mensagem - ' + JSON.stringify(mensagem))
            io.to(`chat:${mensagem.id_chat}`).emit("nova mensagem",mensagem)
        }
    })

    socket.on("add chat", (chat,usuarios) => {
        let IdSocketUsuario
        console.log(usuarios)
        for (let usuario of usuarios){
            console.log(usuario)
            IdSocketUsuario = users.find(elemento => elemento.id === usuario)
            console.log(IdSocketUsuario)
            if (IdSocketUsuario) io.to(IdSocketUsuario.socketId).emit("chat",chat)
        }
        console.log('idChat '+chat.id)
        socket.join(`chat:${chat.id}`)
        console.log(socket.rooms)
    })

    socket.on("userAdd chat", (chatId) => {
        socket.join(`chat:${chatId}`)
        console.log("entrou no chat ae")
    })

    socket.on("add chats",chatsIds=>{
        chatsIds.forEach(chatId => {
            console.log("chats Ids - "+ chatId)
            socket.join(`chat:${chatId}`)
        })
    })

})

io.listen(8080)

