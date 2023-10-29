import React, {useState} from 'react'

export default function Greetings() {
  const [changeText, setChangeText] = useState(false);
  const handleClick = () => {
    setChangeText(prev => !prev);
  };
  return (
    <div>
        <h2>Hello World!</h2>
        {changeText ? (<p>Changed Text</p>) : (<p>It's good to see you!</p>)}
        <button onClick={handleClick}>Change Text</button>
    </div>
  )
}
