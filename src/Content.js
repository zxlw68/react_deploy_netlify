
    //npmjs.com react-icons
import {FaTrashAlt} from 'react-icons/fa'
import ItemList from './ItemList'




    // rafce sfc
const Content = ({items, handleCheck, handleDelete}) => {
        
    

    return (
        <> {/* fragment */}

            {items.length ? (
                <ItemList
                items = {items}    
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
                />
            ):(
                <p style ={{marginTop: '2rem'}}>
                    Your list is empty.
                </p>
            )}

        </>
    );
}
 
export default Content;