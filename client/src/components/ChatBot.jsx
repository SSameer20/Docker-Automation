import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I help you with your containers today?', sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, sender: 'user' }];
    setMessages(newMessages);
    setUserInput('');

    try {
      const res = await fetch('http://localhost:5000/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput }),
      });

      const data = await res.json();
      setMessages([...newMessages, { text: data.reply || 'No response from server', sender: 'bot' }]);
    } catch (error) {
      setMessages([...newMessages, { text: 'Server error. Please try again.', sender: 'bot' }]);
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
