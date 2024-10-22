import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faComment } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import { useState } from 'react';
const ChatBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toogleChatBox = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="chatIcon" onClick={toogleChatBox}>
        <FontAwesomeIcon icon={faComment} color="white" size="2x" />
      </div>
      {isVisible && (
        <div className="chatBox">
          <h3>Chat with Support</h3>
          <p>How can we help you?</p>
        </div>
      )}
    </>
  );
};
export default ChatBox;
