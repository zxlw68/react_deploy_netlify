import {FaPlus} from 'react-icons/fa'  //fontawesome plus
import {useRef} from 'react'   
               //shift focus from FaPlus icon button to add item input box 

const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  const inputRef = useRef()



  return (
   <form className="addForm" onSubmit={(e) => handleSubmit(e)}>
    
    <label htmlFor="addItem">Add Item</label>
    <input //controlled conponent
      autoFocus
      ref={inputRef}
      id="addItem"
      type="text" 
      placeholder="Add Item"
      required
      value={newItem}
           //value= current state of newItem
      onChange={(e) => setNewItem(e.target.value)}
   />

    <button
      type="submit"
      aria-label='Add Item'
      onClick={() => inputRef.current.focus()}
      >
      <FaPlus/>
    </button>

   </form>
  )
}

export default AddItem