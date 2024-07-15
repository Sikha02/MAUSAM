import React, { useState } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from Font Awesome

function App() {
  const [input, setInput] = useState('');

  return (
    <div className='w-full h-screen text-blue-600 px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>MAUSAM</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
        <FaSearch className='text-blue-500 h-[1.5rem] w-[1.5rem]' />{/* Using the search icon in place of image mentioned in video we used tag  */}
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                // submit the form
              }
            }}
            type="text"
            className='focus:outline-none w-full text-[#212121] text-lg'
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='search city'
          />
        </div>
      </nav>
    </div>
  );
}

export default App;

