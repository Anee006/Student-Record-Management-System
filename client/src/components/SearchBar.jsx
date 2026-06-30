function SearchBar({ searchTerm, setSearchTerm }) {

  return (

    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search by name"
    />

  );
}

export default SearchBar;
