import { useEffect } from 'react';

const Thought = ({ thought: { id, text, expiresAt }, removeThought }) => {
  const handleRemoveClick = () => removeThought(id);

  useEffect(() => {
    const timerID = setTimeout(() => removeThought(id), expiresAt - Date.now());
    return () => clearTimeout(timerID);
  }, []);

  return (
    <li className='Thought'>
      <button aria-label='Remove thought' className='remove-button' onClick={handleRemoveClick}>
        &times;
      </button>
      <div className='text'>{text}</div>
    </li>
  );
};

export default Thought;
