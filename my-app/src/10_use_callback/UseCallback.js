import React, { useState, useCallback } from "react";

const items = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Honeydew"];

function ItemList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  // useCallback to memoize the filter function
  const filterItems = useCallback(() => {
    setFilteredItems(
      items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]); // Dependency array includes 'searchTerm'

  // Update filtered items when searchTerm changes
  React.useEffect(() => {
    filterItems();
  }, [filterItems]); // Re-run effect when filterItems changes

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
