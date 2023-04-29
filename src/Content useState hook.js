import {useState} from 'react'

// rafce sfc
const Content = () => {
    
    const [name, setName] = useState('dave')   
          //use const to use useState, because we never change the value of the state manually
    const [count, setCount] = useState(0)


    const  handleNameChange = () => {
        const names= ['bob', 'kevin', 'dave']
        const int = Math.floor(Math.random()*3)
        setName(names[int]) 
    }


    const handleClick = () => {
        setCount(count + 1)  // set a new value as the current state
        setCount(count + 1)
        console.log(count)
    }       //the current value of the state comes into the function, we do not alter that, even if you might use setCount to set the state for the useState, when you log it in the console or use its value, it will not be changed because it was brought into the function


    const handleClick2 = (name) => {
        console.log(count)
    }


   




    return (
        <main>
        <p onDoubleClick={handleClick}>
                hello {name} 
                <br />
                {count}
            </p>
            
            <button onClick={handleNameChange}>change name</button>

            <button onClick={()=>{handleClick()}}>click it 2</button>

            <button onClick={handleClick2}>click it 3</button>


        </main>
    );
}
 
export default Content;