import React, { useState } from "react";

export default function Forms({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handelSubmtion(e) {
    e.preventDefault();
    if(!description) return;
    const newItem = {description, quantity, packed: false, id: Date.now() }
    console.log(newItem)

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handelSubmtion}>
      <h3> What do you need for your 😍 trip</h3>
      <select name="number" id="sle" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="tex"
        placeholder="Item......"
      />
      <button type={'submit'}>Add</button>
    </form>
  );
}
