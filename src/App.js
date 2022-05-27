import { useState, useEffect } from "react";

import Chat from "./components/Chat/Chat";
import ChatSettings from "./components/ChatSettings/ChatSettings";

import { useHttpRequest } from "./hooks/useHttpRequest";

const chatInitialState = {
    option1: '',
    option2: '', 
    option3: '',
    option4: '', 
    option5: '', 
    option6: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: ''  
}
  
const App = () => {

  const { request } = useHttpRequest();

  const [chatItems, setChatItems] = useState(chatInitialState);

  useEffect(() => {
    request('https://getbutton-bot.herokuapp.com/messages')
        .then((data) => setChatItems(data));
  }, [])

  return (
    <div style={{fontFamily: 'Arial'}}>
      <ChatSettings chatItems={chatItems} setChatItems={setChatItems}/>
      <Chat chatItems={chatItems}/>
    </div>
  )
}

export default App;
