//npmjs.com react-icons
import {FaTrashAlt} from 'react-icons/fa'

const LineItem = ({items,handleCheck, handleDelete,item} ) => {
  return (
    <li className='item'
        key= {item.id}
    >

            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />

        <label
            style={(item.checked) ? {textDecoration: 'line-through' } : null}   // {} thisn is style
            onDoubleClick = {()=> handleCheck(item.id)}
        >{item.item}
        </label>

        <FaTrashAlt
            onClick={() => {handleDelete(item.id)}}
            role='button'
            tabIndex='0'
            aria-label={`Delete ${item.item}`} //for accessibility
        />

    </li>
  )
}

export default LineItem