import Header from './Header'
import SearchItem from './SearchItem'
import AddItem from './AddItem'
import Content from './Content'
import Footer from "./Footer"
import {useState,useEffect} from 'react'
// chap12 json   npx json-server  -p 3500 -w data/db.json
import apiRequest from './apiRequest'

function App() {

  const API_URL = 'http://localhost:3500/items'
   




  
  
  

  //useState


  const [items, setItems] = useState([]) 
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect (() => {
    
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL)
        if(!response.ok) throw Error('did not receive expected data')
           //response.ok 200  !response.ok 404
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      }catch(err){
        setFetchError(err.message)  //err. stack
      } finally{
        setIsLoading(false)
      }
    }

    setTimeout(() => {
      (async () => await fetchItems()) ()  // () call it into action
    }, 1)

    
  }, [])  //only update on load time []
          










    //functions
    

  const addItem = async (item) => {
    const id = items.length ? items[items.length -  1].id + 1 : 1
    const myNewItem =  {id, checked:false, item}
    const listItems = [...items, myNewItem] // spread opreater ...items, 

    setItems(listItems)
   
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)  //result not null
    
  }


    

  
  const handleCheck = async (id) => {
    const listItems = items.map( (item) => item.id === id ? {...item, checked: !item.checked} : item )

    setItems(listItems)

    const myItem = listItems.filter((item) => item.id === id)

    const updateOptions = {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) {setFetchError(result)}  
          //will return error message, either null or has a value, if theres a result, theres an error message thats not null, display error

  }



  const handleDelete =async (id) =>{
    const listItems = items.filter((item) => item.id !== id)

    setItems(listItems)

    const deleteOptions = {method: 'DELETE'}
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) {setFetchError(result)}  
    
  }


  const handleSubmit = (e) => {
    e.preventDefault()  
          //stop page from reloading after submit new item to form
    if(!newItem){ return}  
          //if no newItem exit all together, empty submit
          //call addItem
    addItem(newItem)
    setNewItem('')
    
    
  }
  









      //render

  return (
    <div className="App">
      <Header title='Grocery List'/>    {/* custom element in jsx */}
      
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
        />
      <SearchItem
        search = {search}
        setSearch = {setSearch}
      />
      <main>
        {isLoading && <p>Loading Items...</p> }
        {fetchError && <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p> }
             {/*  && if we have an fetchError then we going to display */}
        {!fetchError && !isLoading && <Content 
          items = {items.filter ((item) => ((item.item).toLowerCase().includes( search.toLowerCase() )) )}    // prop drilling pt1 pass to child 
          setItems = {setItems}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />}   
                            {/* remove your list is empty, display it only when !fetchError && !isLoading */}
      </main>
      <Footer 
        length = {items.length}
      />
      
    </div>
  );
}

export default App;
