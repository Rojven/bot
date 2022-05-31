import { AiOutlineRobot, AiOutlineUser } from 'react-icons/ai';

import './Messages.css';

const Messages = ({ incomingMessage, sentMessage, message, i }) => {
  return (
    <div key={i}>
      {/* Incoming message */}
      {
        incomingMessage && (
          <div className="message">   
            <div className='img-box'>
                <AiOutlineRobot className='message-img'/>
            </div>
            <div className='message-text'>{message}</div>
          </div>
        ) 
      } 

      {/* Sent message */}
      {
        sentMessage && (
          <div className="message user-message">
            <div className='img-box'>
              <AiOutlineUser className='message-img'/>
            </div>
            <div className='message-text'>{message}</div>
          </div>
        )
      }
    </div>
  )
}

export default Messages;