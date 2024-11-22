// import { useState } from 'react';

// const AddItem = ({onsubmit}) => {
//   const [input, setInput] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();
//     if(!input.trim()) return;
//     onsubmit(input)
//     setInput('')
//   }

//   return (
//     <form className='flex m-10' onSubmit={handleSubmit}>
//       <input
//         type='text'
//         placeholder='e.g. oregano'
//         className='border border-gray-300 rounded-md p-2 grow'
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button
//         type='submit'
//         className='bg-slate-900 rounded-md ml-2 text-md font-semibold text-gray-400 px-6  hover:bg-slate-700'
//       >
//         + Add ingredient
//       </button>
//     </form>
//   );
// };

// export default AddItem;
