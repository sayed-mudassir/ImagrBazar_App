function Search({onChangeText, onSearch, isLoading}){
    return(
        <div className="search-bar">
          <div className="inner-container">
          <input placeholder="enter text to search ......" onChange={onChangeText}/>
          <button disabled={isLoading} onClick={onSearch}>search</button>
          </div>
        </div>
    )
}
export default Search;