import React, {useState} from 'react';
import {data} from './data';
import MenuItems from './MenuItems';
const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(data);
  const [categoies, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setItems(data)
    if(category === 'all'){
      setItems(data);
      return;
    }
    const newItem = data.filter((item) => item.category === category);
    setItems(newItem);
    console.log(items)
  }
  return (
    <main>
      <section className="menu">
        <div>
          <h2 className="title">Our Menu</h2>
          <hr className="titleUnderline"/>
        </div>
        <div className="buttons">
          {categoies.map((category, index) => {
            return (
              <button
                type="button"
                className='btn'
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            )
          })}
        </div>
        <MenuItems items={items} />
      </section>
    </main>
  );
}

export default App;
