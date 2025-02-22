import React, { useState } from 'react'; 
import { MessageCircle, BookOpen, HelpCircle, BarChart2, Settings, LogOut, Paperclip, Send } from 'lucide-react';  

const initialMessages = [   
  {     
    id: 1,     
    type: 'bot',     
    content: 'Welcome! How can I help you today?'   
  } 
];  

const menuItems = [   
  { icon: MessageCircle, label: 'AI Chat', active: true },   
  { icon: BookOpen, label: 'Study Material' },   
  { icon: HelpCircle, label: 'AI Quiz' },   
  { icon: BarChart2, label: 'Progress' },   
  { icon: Settings, label: 'Settings' } 
];  

const AIChatInterface = () => {   
  const [messages, setMessages] = useState(initialMessages);   
  const [inputMessage, setInputMessage] = useState('');    
  
  const handleSendMessage = () => {     
    if (inputMessage.trim()) {       
      setMessages([         
        ...messages,         
        { id: messages.length + 1, type: 'user', content: inputMessage }       
      ]);       
      setInputMessage('');     
    }   
  };    
  
  return (     
    <div className="flex h-screen bg-gray-50">       
      {/* Sidebar */}       
      <div className="w-64 bg-white border-r border-gray-200 p-4">         
        <div className="flex items-center gap-2 mb-8">           
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">             
            <div className="text-blue-600 text-xl">🧠</div>           
          </div>           
          <h1 className="text-xl font-semibold text-gray-800">AI Tutor</h1>         
        </div>          
        
        <nav className="space-y-2">           
          {menuItems.map((item, index) => (             
            <button               
              key={index}               
              className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors                 
                ${item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}             
            >               
              <item.icon className="w-5 h-5" />               
              <span>{item.label}</span>             
            </button>           
          ))}         
        </nav>          
        
        <button className="flex items-center gap-2 text-red-500 mt-auto absolute bottom-4">           
          <LogOut className="w-5 h-5" />           
          <span>Log out</span>         
        </button>       
      </div>        
      
      {/* Main Chat Area */}       
      <div className="flex-1 flex flex-col">         
        <div className="flex-1 overflow-auto p-8 space-y-10 mx-16 my-10">           
          {messages.map((message) => (             
            <div               
              key={message.id}               
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}             
            >               
              <div                 
                className={`max-w-[80%] p-6 m-6 rounded-lg ${                   
                  message.type === 'user'                     
                    ? 'bg-blue-600 text-white text-xl font-medium'                     
                    : 'bg-gray-100 text-gray-800 text-xl font-medium'                 
                }`}               
              >                 
                {message.content}               
              </div>             
            </div>           
          ))}         
        </div>          
        
        {/* Input Area */}         
        <div className="border-t border-gray-200 p-6 mx-6 my-4">           
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-4 mx-6">             
            <button className="text-gray-400 hover:text-gray-600 mx-2">               
              <Paperclip className="w-5 h-5" />             
            </button>             
            <input               
              type="text"               
              value={inputMessage}               
              onChange={(e) => setInputMessage(e.target.value)}               
              placeholder="Message AITutor..."               
              className="flex-1 outline-none text-lg mx-2"               
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}             
            />             
            <button               
              onClick={handleSendMessage}               
              className="text-blue-600 hover:text-blue-700 mx-2"             
            >               
              <Send className="w-5 h-5" />             
            </button>           
          </div>         
        </div>       
      </div>     
    </div>   
  ); 
};  

export default AIChatInterface;