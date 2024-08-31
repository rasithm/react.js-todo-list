import React from 'react'
import { FaPlus } from 'react-icons/fa'
const Additem = ({NewItem,setNewItem,handlesubmit}) => {
  return (
    <form className='addForm' onSubmit={handlesubmit}>
        <label htmlFor='additem'>Add Item </label>
        <input
            autoFocus
            type='text'
            id='additem'
            required
            placeholder='Add Item'
            value={NewItem}
            onChange={(e) => setNewItem(e.target.value)}

        />
        <button 
        type='submit'
        aria-label='Add item'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default Additem