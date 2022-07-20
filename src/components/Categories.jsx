import React from 'react'

const Categories = () => {
  const[activeCategories, setActiveCategories] = React.useState(0)

  const categories = ["Все","Мясные","Вегетарианская","Гриль", "Острые", "Закрытые"]

  const makeActive = (index) => {
    setActiveCategories(index)
  }
  
  return (
    <div class="categories">
    <ul>
      {categories.map((value,i) => 
        <li onClick={() =>makeActive(i)} className={activeCategories === i ? "active" : ''} >{value}</li>
      )}
    </ul>
  </div>
)}

export default Categories