const { Server } = require("socket.io")
const io = new Server({cors: {origin: "http://localhost:3001"}})

io.on("connection", (socket) => {
    console.log("user conectado "+socket.handshake.auth.userId)
    socket.on("disconnect", () => {
        console.log("user desconectado")
    })
    socket.on("send message", mensagem => {
        console.log(mensagem.id_chat)

        io.to(`chat:${mensagem.id_chat}`).emit("nova mensagem",mensagem)
    })
    socket.on("add chats",chatsIds=>{
        chatsIds.forEach(chatId => {
            socket.join(`chat:${chatId}`)
        })
        console.log(socket.rooms)
    })

})

io.listen(8080)

