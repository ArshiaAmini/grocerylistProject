import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";


const Contents = ({ items, setItems }) => {
  return (
    <main className='contents'>
      <ul>
        {items.map((item) => (
          <div >
          <li className = "itemLists" key={item.id}>
              <input style ={{height:'40px', width: '40px'}}
                type= "checkbox"
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