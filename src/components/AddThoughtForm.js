import { useState } from 'react';
import { generateId, getNewExpirationTime } from '../utils/utilities';

const AddThoughtForm = ({ addThought }) => {
  const [text, setText] = useState('');

  const handleTextChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) return alert('Please think of something!');
    const newThought = {
      id: generateId(),
      text,
      expiresAt: getNewExpirationTime()
    };
    addThought(newThought);
    setText('');
  };

  return (
    <form className='AddThoughtForm' onSubmit={handleSubmit}>
      <input
        type='text'
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type='submit' value='Add' />
    </form>
  );
};

export default AddThoughtForm;
