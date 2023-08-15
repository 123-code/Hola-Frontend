import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost/chat');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const chatSchema = new mongoose.Schema({
    question: String,
    room: String,
    answer: String
  });

  const Chat = mongoose.model('Chat', chatSchema);


  const server = http.createServer(app);
  const io = new Server(server);

 
  io.on('connection',(socket)=>{
    socket.on('joinRoom', (room) => {
        socket.join(room);
      });


      socket.on('getChats', async (room) => {
        let chats = await Chat.find({ room }).sort({ createdAt: 'asc' }).limit(10);
        socket.emit('chats', chats);
      });
    

  })
  server.listen(4000);