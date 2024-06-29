import React from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd'

export default function AddItem({addnewItem, setNewItem, handleSubmit}) {
  return (

    <form onSubmit={handleSubmit} >
      <div className="addForm">
        <input
          type="text"
          placeholder='Add Item'
          value={addnewItem}
          onChange={(e) => setNewItem(e.target.value)}
          required
          autoFocus
      
      />
        <PostAddIcon
          role='submit'
          tabIndex='0'
          onClick={handleSubmit}
      />
        </div>
    </ form>
  )
}
