

const SearchItem = ({search, setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                          {/* when someone presses enter,dont even have button, we wont reload the page */}
        <label htmlFor="searvh">Search</label>
        <input 
            id='search'
            type="text"
            role="searchbox"
            placeholder="Search Items" 
            value={search}  
                 //value= current state of search
            onChange={(e) => setSearch(e.target.value)}
            
        />
    </form>
  )
}

export default SearchItem