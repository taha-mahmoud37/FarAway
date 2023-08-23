import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Forms from "./Forms";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { Helmet } from "react-helmet";

export default function App() {
  let [items, setItems] = useState([]);
  

  useEffect(() => {
     if(localStorage.getItem("itemList")) {
      setItems(JSON.parse(localStorage.getItem("itemList")))
     }
  }, [])

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    console.log(items);
    let ite = localStorage.setItem("itemList", JSON.stringify(items));
    console.log(ite);
  }
  function handleDeleteItem(itemId) {
    let myItems = [...items];
    let newItemsList = myItems.filter((item) => item.id !== itemId);
    setItems(newItemsList);
    localStorage.setItem("itemList", JSON.stringify(items));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    // let myItems = [...items];
    // let myUpdatesItem = myItems.map((item) =>
    //   item.id === id ? { ...item, packed: !item.packed } : item
    // );
    // setItems(myUpdatesItem);
  }

  function removeAllitemsList() {
    setItems([]);
  }

  return (

    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Far Away ✈</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="app">
      <Logo />
      <Forms onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onRemoveAllItemsList={removeAllitemsList}
      />
      <Stats items={items} />
    </div>
    </>
  );
}
