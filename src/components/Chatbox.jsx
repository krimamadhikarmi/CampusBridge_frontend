import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faComment } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
const ChatBox = () => {
  return (
    <div className="chatIcon">
      <FontAwesomeIcon icon={faComment} color="white" size="2x" />
    </div>
  );
};
export default ChatBox;
