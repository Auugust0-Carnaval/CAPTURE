import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Button, Icon } from 'semantic-ui-react';

function Post() {
  const setMessage = 'Submit your drawing';
  const upperCaseString = setMessage.toUpperCase();
  const fileInputRef = useRef(null);

  const [isInputText, setInputText] = useState('');
  const [isFileText, setFileText] = useState('Choose File');

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileText(file.name);
      console.log(file);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    console.log(`Input text: ${isInputText}`);

    // Construir o objeto FormData com os dados do formulário
    const formData = new FormData();
    formData.append('title', isInputText);
    formData.append('Img', fileInputRef.current.files[0]);
    formData.append('description', null);

    // Fazer a chamada HTTP POST
    axios
      .post('http://localhost:3000/api/photos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('Success:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="setCartoon">
        <div className="ui segment">
            <div className="ui two column very relaxed grid">
                <div className="column">
                    <strong>
                        <h4 className="text-center text-primary">{upperCaseString}</h4>
                    </strong>
                    <p className="text-center">Do not upload illegal photos</p>
                    <div className="ui fluid left icon input">
                        <input
                            type="text"
                            placeholder="Title"
                            value={isInputText}
                            onChange={handleInputChange}
                        />
                        <i className="users icon"></i>'
                    </div>
                    <div className="file-input-container">
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}/>
                        <button className="ui basic button" onClick={handleButtonClick}>
                            <i class="file icon"></i>{isFileText}
                        </button>
                    </div>
                </div>
                <div className="column">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div className="ui vertical divider">OR</div>
        </div>
        <button id="send" class="send ui blue basic button text-center" onClick={handleSubmit} style={{ display: 'block', marginLeft: '37%' }}>
            <i class="file icon"></i>SUBMIT
        </button>
    </div>
  );
}

export default Post;
