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
  
  const handleCheck = (id) => {
    const check = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item) 
    setItems(check)
    
  }
  

  return (
    <div className="App">
      <Header />
      <Contents
        items={items}
        setItems={setItems}
        handleCheck ={ handleCheck}
      
      />
      <Footer/>
      
    </div>
  );
}

export default App;
