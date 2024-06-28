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
  

  return (
    <div className="App">
      <Header />
      <Contents
        items={items}
        setItems ={setItems}
      
      />
      <Footer/>
      
    </div>
  );
}

export default App;
