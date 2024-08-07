import React from 'react';
import Todo from './components/Todo';

const App = () => {
  return (
    <div className='bg-sky-900 py-4 min-h-screen flex items-center justify-center'>
      <div className="w-full max-w-md mx-auto p-4">
        <Todo />  
      </div>
    </div>
  );
}

export default App;
