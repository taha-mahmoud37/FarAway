import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItems, onUpdateItem, onRemoveAllItemsList }) {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItem;

  if (sortedBy === "input") sortedItem = items;
  if (sortedBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));


    //  const clearItems = () => onRemoveAllItemsList; 

  return (
    <div className="list">
      <ul style={{ overflow: "hidden" }}>
        {sortedItem.map((item) => (
          <Item
            onDeleteItems={onDeleteItems}
            onUpdateItem={onUpdateItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sorted by input stats</option>
          <option value="description">Sorted by description stats</option>
          <option value="packed">Sorted by packed stats</option>
        </select>
        <button onClick={onRemoveAllItemsList}>Clear List</button>
      </div>
    </div>
  );
}
