import React from 'react';

const TodoList = () => {
    const buttonclick = () =>{
        alert("Add task sucessfully");
    };
  return (
    <div className='m-5 p-5 bg-gray-100 rounded-md shadow-lg'>
      <ul className='list-none space-y-3'>
        <li className='flex items-center'>
          <input type="checkbox" className='mr-2' />
          <span className='text-lg'>Eat</span>
        </li>
        <li className='flex items-center'>
          <input type="checkbox" className='mr-2' />
          <span className='text-lg'>Code</span>
        </li>
        <li className='flex items-center'>
          <input type="checkbox" className='mr-2' />
          <span className='text-lg'>Sleep</span>
        </li>
        <li className='flex items-center'>
          <input type="checkbox" className='mr-2' />
          <span className='text-lg'>Wake Up</span>
        </li>
        <li className='flex items-center'>
          <input type="checkbox" className='mr-2' />
          <span className='text-lg'>Repeat</span>
        </li>
      </ul>
      <div className='mt-4'>
        <button onClick={buttonclick} className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition'>
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default TodoList;
