import { useState, useRef, useEffect } from "react";
import { AiOutlineRobot } from 'react-icons/ai';
import { MdSend } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { chatBotData } from "./data";
import Messages from "../components/Messages/Messages";
import StarterScreen from "../components/StarterScreen/StarterScreen";

import './ChatBot.css';

let chats = [];

const options = [
    {value: 'option1'},
    {value: 'option2'},
    {value: 'option3'},
    {value: 'option4'},
    {value: 'option5'},
    {value: 'option6'}
]

const ChatBot = () => {

    const messageEl = useRef(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatList, setChatList] = useState([]);
    const [message, setMessage] = useState('');
    const [starterScreen, setStarterScreen] = useState(true);

    const getAnswer = (q) => {
        for(let i = 0; i < chatBotData.length; i++) {
            if(chatBotData[i].question.includes(q.toLowerCase())) {
                chats = [...chats, {message: chatBotData[i].answer, incomingMessage: true}];
                setChatList([...chats]);
                return;
            }
        }
        chats = [...chats, {message: "I do not understand you", incomingMessage: true}];
        setChatList([...chats]);
        return;

    }

    const onMessageSent = (e, messageValue) => {
        e.preventDefault();
        chats = [...chats, {message: messageValue, sentMessage: true}];
        setChatList([...chats]);
        setTimeout(() => {
            getAnswer(messageValue);
        },800)
        setMessage('');
    }


    //Chat auto-scroll

    const scrollToBottom = (e) => {
        const { currentTarget: target } = e;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    }

    useEffect(() => {
        const message = messageEl.current;
        if (messageEl) {
            message.addEventListener('DOMNodeInserted', scrollToBottom)
        }
        
        return () => {
            message.removeEventListener('DOMNodeInserted', scrollToBottom);
        }
        
    }, [])

    return (
        <div>
            <div className= {isChatOpen ? 'chat-window' : 'chat-window hidden'}>
                <div className="chat-header">
                    <h2>
                        {!starterScreen && <IoMdArrowRoundBack style={{cursor: 'pointer'}} onClick={() => setStarterScreen(true)}/>}
                        {starterScreen ? 'Greeting' : 'ChatBot'}
                    </h2>
                    <button onClick={() => setIsChatOpen(false)}>&times;</button>
                </div>     
                <div className="chat-body" ref={messageEl}>
                    {starterScreen ? (  
                        <StarterScreen setStarterScreen={setStarterScreen}/>      
                    ) : (
                        <div className="messages-box">
                            {chatList.map((props, i) => 
                                <Messages {...props} key={i}/>    
                            )}
                        </div>    
                    )}   
                </div> 
                <div className="options-box" style={{display: starterScreen ? 'none' : 'flex'}}>
                    {options.map(({ value }, i) =>
                        <button key={i} onClick={(e) => onMessageSent(e, value)} value={value}>{value}</button>
                    )}  
                </div>
                <form className="send-form" onSubmit={(e) => onMessageSent(e, message)} style={{display: starterScreen ? 'none' : 'flex'}}>
                    <textarea name="send" placeholder="type..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button type='submit' disabled={message ? false : true}>
                        <MdSend/>
                    </button>
                </form>      
            </div>
            <button className="chat-trigger" onClick={() => setIsChatOpen(!isChatOpen)}>
                <AiOutlineRobot className="chat-trigger-icon"/>
            </button>
        </div>
    )
}

export default ChatBot;