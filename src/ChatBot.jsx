import React from 'react';
import "./Chatbot.css";
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import config from './Chatbot/config';

function ChatBot()
{
    return(
        <div className="chatbot">
            <div style={{maxWidth:"300px"}}>
                <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                />
            </div>
        </div>
    )
}
export default ChatBot;