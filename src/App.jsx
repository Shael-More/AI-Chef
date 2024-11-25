// import { useState } from 'react';
// import AddItem from './components/AddItem';
import Header from './components/Header';
import HomePage from './components/HomePage';
export default function App() {
  // const [itemList, setItemList] = useState([]);

  // function addToList(title) {
  //   setItemList((prevList) => [...prevList, title]);
  // let api = import.meta.env.VITE_API_KEY
  // console.log(api)
  // }
  return (
    <>
      <Header />
      <HomePage />
      {/* <main className='border p-2 rounded-md bg-[#fafaf8]'>
        <AddItem onsubmit={addToList} />

        <div className='space-y-2 m-10'>
          {itemList.length > 0 ? (
            <h2 className='font-bold text-2xl'>Ingredients on hand: </h2>
          ) : (
            ''
          )}

          {itemList.map((item, index) => (
            <li key={index} className='text-gray-600'>
              {item}
            </li>
          ))}
        </div>
      </main> */}
    </>
  );
}
