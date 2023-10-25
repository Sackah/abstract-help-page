type SearchBarProps = {
    toggleSearch: ()=>void ;
}

const SearchBar = (props: SearchBarProps) => {
    const { toggleSearch } = props;

    return ( 
        <div className="search-bar">
            <label htmlFor="search" className="visibly-hidden">search</label>
            <input type="text" id="search" placeholder="Search"/>
            <i className="fa-solid fa-xmark" onClick={toggleSearch}></i>
        </div>
     );
}
 
export default SearchBar;