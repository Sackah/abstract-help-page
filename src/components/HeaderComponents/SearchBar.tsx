type SearchBarProps = {
    toggleSearch: ()=>void ;
    isSearchActive: boolean;
}

const SearchBar = (props: SearchBarProps) => {
    const { toggleSearch, isSearchActive } = props;

    return ( 
        <div className={`search-bar ${!isSearchActive ? 'hidden': ''}`}>
            <label htmlFor="search" className="visibly-hidden">search</label>
            <input type="text" id="search" placeholder="Search"/>
            <i className="fa-solid fa-xmark" onClick={toggleSearch}></i>
        </div>
     );
}
 
export default SearchBar;