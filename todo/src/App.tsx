import { useState } from 'react';

function App() {
const [items,setItems]=useState<string[]>(['sad','sad'])
const [inputValue,setInputValue]=useState <string>("")

const hadleSubmit=()

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 p-4 bg-gray-100 rounded-lg shadow-lg">
        <form className="mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter something..."
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <div>
          <div className="flex items-center justify-between bg-white border-b border-gray-200 p-4">
            <p className="text-lg">List Item 1</p>
            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
              Delete
            </button>
          </div>
          <div className="flex items-center justify-between bg-white border-b border-gray-200 p-4">
            <p className="text-lg">List Item 2</p>
            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
              Delete
            </button>
          </div>
          <div className="flex items-center justify-between bg-white border-b border-gray-200 p-4">
            <p className="text-lg">List Item 3</p>
            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
