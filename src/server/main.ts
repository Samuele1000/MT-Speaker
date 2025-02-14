import { createServer } from 'http';
import { Server } from 'socket.io';
import { initializeDatabase } from './database';
import { handleMusicPlayback, handleSpeakerManagement } from './handlers';

const PORT = process.env.PORT || 3000;

const server = createServer();
const io = new Server(server);

initializeDatabase();

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('playMusic', (data) => {
        handleMusicPlayback(data, socket);
    });

    socket.on('manageSpeaker', (data) => {
        handleSpeakerManagement(data, socket);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});