import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import Contents from './Contents';

function App() {

  const [items, setItems] = useState( [
    {
      id: 1,
      checked: false,
      item:  "Iphone 15 Pro Max"
    },

    {
      id: 2,
      checked: false,
      item:  "Apple Mack"
    },

    {
      id: 3,
      checked: false,
      item:  "Widows Computer"
    },

  ])
  
  //this function checks if the clicked itme's id as the same mapped item, 
  //if so it creates a copy of the arrray item and set the checked item to opposite and then set items to new array
    const handleCheck = (id) => {
    const check = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item) 
    setItems(check)
    
    }
  
  // this function delte the item
  const handleDelete = (id) => {
    const deleteItem = items.filter((item) => item.id !== id);
    setItems(deleteItem)
    
  }
  

  return (
    <div className="App">
      <Header />
      <Contents
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete= {handleDelete}
      
      />
      <Footer/>
      
    </div>
  );
}

export default App;
