import Server from 'socket.io'

export default function startServer(store) {
  const io = new Server().attach(8090)

  store.subscribe(
    () => {
      io.emit('state', store.getState().toJS())
    }
  )

  io.on('connection', (socket) => {
    console.log('Here I am', store.getState().toJS())
    socket.emit('state', store.getState().toJS()    )
  })
}
