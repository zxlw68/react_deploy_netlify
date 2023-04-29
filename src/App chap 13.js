import Header from './Header'
import SearchItem from './SearchItem'
import AddItem from './AddItem'
import Content from './Content'
import Footer from "./Footer"
import {useState,useEffect} from 'react'
// chap12 json   npx json-server  -p 3500 -w data/db.json

function App() {

   


  
  
  
  //useState

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || [])   //short-circuit operator || or 

  /* 

  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
  ]); 
  
  
  */


  const [newItem, setNewItem] = useState('')
                       //blank to start out at



  const [search, setSearch] = useState('')


  

  useEffect (() => {
    localStorage.setItem('shoppingList', JSON.stringify(items))
  }, [items])








    //functions

  


  const addItem = (item) => {
    const id = items.length ? items[items.length -  1].id + 1 : 1
    const myNewItem =  {id, checked:false, item}
    const listItems = [...items, myNewItem] // spread opreater ...items, 

    setItems(listItems)
    /* setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems)) */
    //console.log(listItems)
  }
    

  
  const handleCheck = (id) => {
    const listItems = items.map( (item) => item.id === id ? {...item, checked: !item.checked} : item )

    setItems(listItems)
    /* setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems)) */
  }

  /* 
      {
      const listItems = items.map( (item) => item.id === id ? 
          {
              id: item.id,
              checked: true,
              item: item.item,
              checked: !item.checked
          }
      : item )
      setItems(listItems)
      } 
  */


  const handleDelete = (id) =>{
    const listItems = items.filter((item) => item.id !== id)

    setItems(listItems)
    /* setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems)) */
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
      <Content 
        items = {items.filter ((item) => ((item.item).toLowerCase().includes( search.toLowerCase() )) )}    // prop drilling pt1 pass to child 
        setItems = {setItems}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}

      />
      <Footer 
        length = {items.length}
      />
      
    </div>
  );
}

export default App;
