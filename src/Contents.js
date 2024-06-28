import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";


const Contents = ({ items, setItems, handleCheck }) => {
  return (
    <main className='contents'>
      <ul>
        {items.map((item) => (
          <div >
          <li className = "itemLists" key={item.id}>
              <input style ={{height:'40px', width: '40px'}}
                type="checkbox"
                tabIndex='0'
                onChange={()=> handleCheck(item.id)}
                
            />
            <label>
              {item.item}
            </label>
            <DeleteIcon/>
            </li>
            </div>
        ))}
      </ul>
      
      
      
      
      
    
    
    </main>
  )
}

export default Contents