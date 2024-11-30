import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import { useState } from 'react';
import '../styles/Chatbox.css';
import CloseButton from './common/CloseButton';
import CustomFormField from './customFormField';
import axios from 'axios';

const ChatBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [quest, setQuest] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChatBox = () => {
    setIsVisible(!isVisible);
  };

  // const handleSubmit = () => {
  //   if (quest.trim() !== '') {
  //     setMessages([...messages, quest]); // Add the new message to the state
  //     setQuest(''); // Clear the input field
  //   }

  //   try {
  //     const response = axios.post(
  //       'https://localhost:7276/api/FAQ/GetAnswer',
  //       {
  //         question: quest,
  //         category: '',
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );
  //     // console.log(response);
  //     const botMessage = response || 'No answer available';
  //     console.log(botMessage);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const handleSubmit = async () => {
    if (quest.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { text: quest, type: 'user' }]);
      setQuest('');

      try {
        const response = await axios.post(
          'https://localhost:7276/api/FAQ/GetAnswer',
          {
            question: quest,
            category: '',
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        const botMessage = response.data.answer || 'No answer available';

        console.log('answer', response.data.answer);
        setMessages((prevMessages) => [...prevMessages, { text: botMessage, type: 'bot' }]);
      } catch (e) {
        console.error('Error fetching the answer:', e);
      }
    }
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
            <CloseButton toggleBox={toggleChatBox} fill={'white'} variant={'chatbox'} />
          </div>

          {/* <div className="chatArea">
            {/* Display the messages here 
            {messages.map((msg, index) => (
              <div key={index} className="chatMessage">
                {msg}
              </div>
            ))}
          </div> */}
          <div className="chatArea">
            {messages.map((msg, index) => (
              <div key={index} className={`chatMessage ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="querybox">
            <CustomFormField
              placeholder={'Enter something'}
              type={'text'}
              value={quest}
              onChange={(e) => setQuest(e.target.value)}
            />
            <div>
              <button type="button" className="submitbutton" onClick={handleSubmit}>
                Enter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
