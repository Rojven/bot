import { useState } from "react";

import './Chat.css';

const Chat = ({ chatItems }) => {

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isOne, setIsOne] = useState(false);
    const [isTwo, setIsTwo] = useState(false);
    const [isThree, setIsThree] = useState(false);
    const [isFour, setIsFour] = useState(false);
    const [isFive, setIsFive] = useState(false);
    const [isSix, setIsSix] = useState(false);

    return (
        <div>
            <div className= {isChatOpen ? 'chat-window' : 'chat-window hidden'}>
                <div className="chat-header">
                    <h2>ChatBot</h2>
                    <button onClick={() => setIsChatOpen(false)}>&times;</button>
                </div>
                <div style={{padding: '15px'}}>   
                    <div className="messages-box">
                        <div className="message">   
                            <div>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1786/1786548.png" 
                                    alt="#"
                                />
                            </div>
                            <div>Hello, how can I help you?</div>
                        </div>

                        <div className="message1" style={isOne ? {display: 'flex', flexDirection: 'column', gap: '15px'} : {display: 'none'}}>
                            <div className="message user-message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.option1}</div>
                            </div>
                            <div className="message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1786/1786548.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.answer1}</div>
                            </div>
                        </div>

                        <div className="message2" style={isTwo ? {display: 'flex', flexDirection: 'column', gap: '15px'} : {display: 'none'}}>
                            <div className="message user-message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.option2}</div>
                            </div>
                            <div className="message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1786/1786548.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.answer2}</div>
                            </div>
                        </div>

                        <div className="message3" style={isThree ? {display: 'flex', flexDirection: 'column', gap: '15px'} : {display: 'none'}}>
                            <div className="message user-message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.option3}</div>
                            </div>
                            <div className="message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1786/1786548.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.answer3}</div>
                            </div>
                        </div>

                        <div className="message4" style={isFour ? {display: 'flex', flexDirection: 'column', gap: '15px'} : {display: 'none'}}>
                            <div className="message user-message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.option4}</div>
                            </div>
                            <div className="message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1786/1786548.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.answer4}</div>
                            </div>
                        </div>

                        <div className="message5" style={isFive ? {display: 'flex', flexDirection: 'column', gap: '15px'} : {display: 'none'}}>
                            <div className="message user-message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.option5}</div>
                            </div>
                            <div className="message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1786/1786548.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.answer5}</div>
                            </div>
                        </div>

                        <div className="message6" style={isSix ? {display: 'flex', flexDirection: 'column', gap: '15px'} : {display: 'none'}}>
                            <div className="message user-message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.option6}</div>
                            </div>
                            <div className="message">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1786/1786548.png" 
                                        alt="#"
                                    />
                                </div>
                                <div>{chatItems.answer6}</div>
                            </div>
                        </div>
                        
                    </div>
                    <p style={{fontSize: '15px', padding: '15px 0'}}>Choose one to start:</p>
                    <div className="options-box"> 
                        {chatItems.option1 !== '' &&
                            <div style={{backgroundColor: 'white', fontSize: '15px',padding: '10px',borderRadius: '8px',cursor: 'pointer'}} onClick={() => setIsOne(true)}>
                                {chatItems.option1}
                            </div>
                        } 
                        {chatItems.option2 !== '' &&
                            <div style={{backgroundColor: 'white', fontSize: '15px',padding: '10px',borderRadius: '8px',cursor: 'pointer'}} onClick={() => setIsTwo(true)}>
                                {chatItems.option2}
                            </div>
                        }
                        {chatItems.option3 !== '' &&
                            <div style={{backgroundColor: 'white', fontSize: '15px',padding: '10px',borderRadius: '8px',cursor: 'pointer'}} onClick={() => setIsThree(true)}>
                                {chatItems.option3}
                            </div>
                        }
                        {chatItems.option4 !== '' &&
                            <div style={{backgroundColor: 'white', fontSize: '15px',padding: '10px',borderRadius: '8px',cursor: 'pointer'}} onClick={() => setIsFour(true)}>
                                {chatItems.option4}
                            </div>
                        }
                        {chatItems.option5 !== '' &&
                            <div style={{backgroundColor: 'white', fontSize: '15px',padding: '10px',borderRadius: '8px',cursor: 'pointer'}} onClick={() => setIsFive(true)}>
                                {chatItems.option5}
                            </div>
                        }
                        {chatItems.option6 !== '' &&
                            <div style={{backgroundColor: 'white', fontSize: '15px',padding: '10px',borderRadius: '8px',cursor: 'pointer'}} onClick={() => setIsSix(true)}>
                                {chatItems.option6}
                            </div>
                        }
                    </div>    
                </div>
            </div>
            <button className="chat-trigger" onClick={() => setIsChatOpen(!isChatOpen)}>
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/1786/1786548.png" 
                    alt="#"  
                />
            </button>
        </div>
    )
}

export default Chat;