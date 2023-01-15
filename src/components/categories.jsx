import React from 'react'

function Categories() {
  const [activeIndex, setActiveIndex ] = React.useState(0)
  const items = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className='categories'>
      <ul>
        {items.map((item, index) => 
        <li 
        key={item + index} 
        className={index === activeIndex ? 'active' : ''} 
        onClick={()=> {if (index !== activeIndex) setActiveIndex(index) }}>
          {item}
        </li>)}
      </ul>
    </div>
  );
}

export default Categories;