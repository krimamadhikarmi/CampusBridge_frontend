import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import { useState } from 'react';
import '../styles/Chatbox.css';
import CloseButton from './CloseButton';

const ChatBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleChatBox = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="chatIcon" onClick={toggleChatBox}>
        <FontAwesomeIcon icon={faComment} color="white" size="2x" />
      </div>
      {isVisible && (
        <div className="chatBox">
          <div className="chathead">
            ChatAI
            <CloseButton toggleBox={toggleChatBox} fill={"white"} variant={"chatbox"}/>
          </div>
          
          <div className='querybox'>
            <div className='textbox'>
              <input type='text' placeholder='Enter something..'/>
            </div>
            <div>
              <button type='submit' className='submitbutton'>Enter</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
