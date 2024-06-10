import React, { useEffect, useState } from 'react';
import './App.css';
import { Spinner } from './Spinner';

interface Message {
  userId: string;
  message: string;
  color: string;
}

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [connectedUsers, setConnectedUsers] = useState<number>(0);
  const [userName, setUserName] = useState<string>("");
  const [isUserNameSubmitted, setIsUserNameSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (isUserNameSubmitted) {
      const newSocket = new WebSocket("wss://vibecheck-k5o9.onrender.com");
      newSocket.onopen = () => {
        console.log('Connection established');
        newSocket.send(userName);
        setSocket(newSocket);
      };
      newSocket.onmessage = (event) => {
        const data: Message | { connectedUsers: number } = JSON.parse(event.data);
        console.log('Message received:', data);
        if ('connectedUsers' in data) {
          setConnectedUsers(data.connectedUsers);
        } else {
          setMessages((prevMessages) => [...prevMessages, data]);
        }
      };

      return () => newSocket.close();
    }
  }, [isUserNameSubmitted, userName]);

  const handleSendMessage = () => {
    if (socket && inputMessage) {
      socket.send(inputMessage);
      setInputMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleUserNameSubmit = () => {
    if (userName.trim()) {
      setIsUserNameSubmitted(true);
    }
  };

  const handleSignOut = () => {
    if (socket) {
      socket.close();
      setSocket(null);
    }
    setUserName("");
    setIsUserNameSubmitted(false);
    setMessages([]);
    setConnectedUsers(0);
  };

  if (!isUserNameSubmitted) {
    return (
      <div className="flex h-screen justify-center items-center bg-image">
        <div className="p-4 bg-gray-200 rounded">
          <h2 className="mb-4 text-center">Enter your name</h2>
          <input
            className="w-full border border-gray-300 rounded p-2 mb-4"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 text-white p-2 rounded"
            onClick={handleUserNameSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  if (!socket) return (
    <div className="flex justify-center">
      <Spinner />
    </div>
  );

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <div>Connected users: {connectedUsers}</div>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {messages.map((msg, index) => (
            <li key={index} style={{ color: msg.color }}>
              <strong>{msg.userId}:</strong> {msg.message}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-gray-200 flex items-center">
        <input
          className="flex-grow border border-gray-300 rounded p-2 mr-2"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
