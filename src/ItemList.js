
import LineItem from './LineItem'

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
        <ul>
            {items.map((item) =>(
                <LineItem
                    items =  {items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                    item = {item} 
                    key = {item.id}
                   
                />
            ))}
        </ul>
    ) 
}

export default ItemList